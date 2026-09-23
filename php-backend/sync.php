<?php
// api/sync.php - Greenish Trade Scraper & Catalog Syncer
require_once __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// Function to safely fetch URL content with User-Agent
function fetchUrl($url) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36');
    $content = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200 && !empty($content)) {
        return $content;
    }
    return false;
}

// Check markup setting
$markupStmt = $pdo->query("SELECT value FROM settings WHERE key = 'default_markup_percent'");
$markupPercent = 30;
if ($row = $markupStmt->fetch()) {
    $markupPercent = floatval($row['value']);
}

$syncedProducts = 0;
$errors = [];

// Categories to scan
$categoryScanList = [
    ['id' => '1', 'name' => 'জেন্টস ফ্যাশন', 'sub' => '1'],
    ['id' => '1', 'name' => 'জেন্টস ফ্যাশন', 'sub' => '2'],
    ['id' => '1', 'name' => 'জেন্টস ফ্যাশন', 'sub' => '3'],
    ['id' => '2', 'name' => 'লেডিস ফ্যাশন', 'sub' => '8'],
    ['id' => '8', 'name' => 'ইলেকট্রনিকস এন্ড গ্যাজেটস', 'sub' => '15'],
    ['id' => '11', 'name' => 'ব্যাগ কালেকশন', 'sub' => '25'],
];

$insertStmt = $pdo->prepare("
    INSERT INTO products (
        id, title, category_id, category_name, subcategory,
        reseller_price, retail_price, stock, image, description, sizes, source_url, updated_at
    ) VALUES (
        :id, :title, :category_id, :category_name, :subcategory,
        :reseller_price, :retail_price, :stock, :image, :description, :sizes, :source_url, CURRENT_TIMESTAMP
    )
    ON CONFLICT(id) DO UPDATE SET
        title = excluded.title,
        reseller_price = excluded.reseller_price,
        stock = excluded.stock,
        image = excluded.image,
        updated_at = CURRENT_TIMESTAMP
");

foreach ($categoryScanList as $cat) {
    $url = "https://greenishtradeltd.com/products/catalog?categoryId={$cat['id']}&subCategoryId={$cat['sub']}";
    $html = fetchUrl($url);

    if (!$html) {
        continue;
    }

    // Match product links: /products/{id}
    preg_match_all('/<a\s+href="\/products\/(\d+)"[^>]*>([\s\S]*?)<\/article>\s*<\/a>/i', $html, $matches, PREG_SET_ORDER);

    if (!empty($matches)) {
        foreach ($matches as $match) {
            $productId = $match[1];
            $cardHtml = $match[2];

            // Extract title
            preg_match('/<h3[^>]*>([^<]+)<\/h3>/i', $cardHtml, $titleMatch);
            $title = !empty($titleMatch[1]) ? trim(html_entity_decode($titleMatch[1])) : "Greenish Product #$productId";

            // Extract price
            preg_match('/BDT\s*([\d,]+(?:\.\d+)?)/i', $cardHtml, $priceMatch);
            $resellerPrice = !empty($priceMatch[1]) ? floatval(str_replace(',', '', $priceMatch[1])) : 420;
            $retailPrice = round($resellerPrice * (1 + ($markupPercent / 100)));

            // Extract stock
            preg_match('/স্টক.*?(\d+)/u', $cardHtml, $stockMatch);
            $stock = !empty($stockMatch[1]) ? intval($stockMatch[1]) : 40;

            // Extract image
            preg_match('/src="([^"]+)"/i', $cardHtml, $imgMatch);
            $image = !empty($imgMatch[1]) ? $imgMatch[1] : '';
            if (strpos($image, '/_next/image?url=') !== false) {
                // Decode internal next/image URL
                parse_str(parse_url($image, PHP_URL_QUERY), $queryArgs);
                if (!empty($queryArgs['url'])) {
                    $image = $queryArgs['url'];
                }
            }

            // Extract subcategory
            preg_match('/<p[^>]*class="[^"]*leading-4[^"]*"[^>]*>([^<]+)<\/p>/i', $cardHtml, $subMatch);
            $subcategory = !empty($subMatch[1]) ? trim($subMatch[1]) : $cat['name'];

            $sourceUrl = "https://greenishtradeltd.com/products/$productId";
            $sizes = json_encode(['M', 'L', 'XL', 'XXL']);
            $desc = "$title - সেরা মানের প্রোডাক্ট। ১০০% কোয়ালিটি গ্যারান্টি সহ আপনহাটে পেয়ে যাচ্ছেন দ্রুততম হোম ডেলিভারি।";

            try {
                $insertStmt->execute([
                    ':id' => $productId,
                    ':title' => $title,
                    ':category_id' => $cat['id'],
                    ':category_name' => $cat['name'],
                    ':subcategory' => $subcategory,
                    ':reseller_price' => $resellerPrice,
                    ':retail_price' => $retailPrice,
                    ':stock' => $stock,
                    ':image' => $image,
                    ':description' => $desc,
                    ':sizes' => $sizes,
                    ':source_url' => $sourceUrl
                ]);
                $syncedProducts++;
            } catch (Exception $e) {
                $errors[] = "Product $productId: " . $e->getMessage();
            }
        }
    }
}

// Update last sync time
$pdo->exec("INSERT OR REPLACE INTO settings (key, value) VALUES ('last_sync', datetime('now'))");

sendJsonResponse([
    'status' => 'success',
    'message' => 'Greenish Trade থেকে লাইভ ক্যাটালগ সিঙ্ক সম্পন্ন হয়েছে!',
    'synced_count' => $syncedProducts,
    'last_sync' => date('Y-m-d H:i:s'),
    'errors' => $errors
]);

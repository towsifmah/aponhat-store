<?php
// api/products.php - Products API with Live Price & Stock Management
require_once __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    exit;
}

// Auto-seed if products table is empty
$countCheck = $pdo->query("SELECT COUNT(*) as cnt FROM products")->fetch();
if ($countCheck['cnt'] == 0) {
    include_once __DIR__ . '/seed.php';
}

// PUT / POST - Update product price, stock, or bulk markup
if ($method === 'PUT' || ($method === 'POST' && isset($_GET['update']))) {
    $input = json_decode(file_get_contents('php://input'), true);

    // 1. Bulk markup update
    if (!empty($input['bulk_markup_percent'])) {
        $percent = floatval($input['bulk_markup_percent']);
        $stmt = $pdo->prepare("
            UPDATE products 
            SET retail_price = ROUND(reseller_price * (1.0 + (:percent / 100.0))),
                updated_at = CURRENT_TIMESTAMP
            WHERE is_active = 1
        ");
        $stmt->execute([':percent' => $percent]);

        // Also update setting
        $settingStmt = $pdo->prepare("INSERT OR REPLACE INTO settings (key, value) VALUES ('default_markup_percent', :val)");
        $settingStmt->execute([':val' => strval($percent)]);

        sendJsonResponse([
            'status' => 'success',
            'message' => "সকল পণ্যের মূল্য {$percent}% প্রফিট মার্জিনে আপডেট করা হয়েছে!",
            'bulk_markup_percent' => $percent
        ]);
    }

    // 2. Single product price & stock update
    if (!empty($input['id'])) {
        $id = trim($input['id']);
        $updates = [];
        $params = [':id' => $id];

        if (isset($input['retail_price'])) {
            $updates[] = "retail_price = :retail_price";
            $params[':retail_price'] = floatval($input['retail_price']);
        }
        if (isset($input['stock'])) {
            $updates[] = "stock = :stock";
            $params[':stock'] = intval($input['stock']);
        }
        if (isset($input['title'])) {
            $updates[] = "title = :title";
            $params[':title'] = trim($input['title']);
        }

        if (empty($updates)) {
            sendJsonResponse(['status' => 'error', 'message' => 'আপডেট করার মতো কোনো তথ্য দেওয়া হয়নি।'], 400);
        }

        $updates[] = "updated_at = CURRENT_TIMESTAMP";
        $sql = "UPDATE products SET " . implode(", ", $updates) . " WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);

        // Fetch updated product
        $fetchStmt = $pdo->prepare("SELECT * FROM products WHERE id = :id");
        $fetchStmt->execute([':id' => $id]);
        $updatedProduct = $fetchStmt->fetch();

        sendJsonResponse([
            'status' => 'success',
            'message' => 'পণ্যের মূল্য ও তথ্য সফলভাবে আপডেট হয়েছে!',
            'data' => $updatedProduct
        ]);
    }

    sendJsonResponse(['status' => 'error', 'message' => 'প্রোডাক্ট আইডি আবশ্যক।'], 400);
}

// GET - Single product or product list
$id = isset($_GET['id']) ? trim($_GET['id']) : null;
$categoryId = isset($_GET['category_id']) ? trim($_GET['category_id']) : null;
$search = isset($_GET['search']) ? trim($_GET['search']) : null;
$limit = isset($_GET['limit']) ? intval($_GET['limit']) : 100;

if ($id) {
    $stmt = $pdo->prepare("SELECT * FROM products WHERE id = :id AND is_active = 1");
    $stmt->execute([':id' => $id]);
    $product = $stmt->fetch();

    if ($product) {
        $product['sizes'] = json_decode($product['sizes'] ?: '[]', true);
        $product['images'] = json_decode($product['images'] ?: '[]', true);
        if (empty($product['images']) && $product['image']) {
            $product['images'] = [$product['image']];
        }
        sendJsonResponse(['status' => 'success', 'data' => $product]);
    } else {
        sendJsonResponse(['status' => 'error', 'message' => 'পণ্যটি পাওয়া যায়নি'], 404);
    }
}

$query = "SELECT * FROM products WHERE is_active = 1";
$params = [];

if ($categoryId) {
    $query .= " AND category_id = :category_id";
    $params[':category_id'] = $categoryId;
}

if ($search) {
    $query .= " AND (title LIKE :search OR subcategory LIKE :search OR description LIKE :search OR id LIKE :search)";
    $params[':search'] = '%' . $search . '%';
}

$query .= " ORDER BY created_at DESC LIMIT " . $limit;

$stmt = $pdo->prepare($query);
$stmt->execute($params);
$products = $stmt->fetchAll();

foreach ($products as &$p) {
    $p['sizes'] = json_decode($p['sizes'] ?: '[]', true);
    $p['images'] = json_decode($p['images'] ?: '[]', true);
    if (empty($p['images']) && $p['image']) {
        $p['images'] = [$p['image']];
    }
}

sendJsonResponse([
    'status' => 'success',
    'count' => count($products),
    'data' => $products
]);

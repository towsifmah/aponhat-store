<?php
// api/db.php - Robust SQLite Database Setup for AponHat

$dbDir = __DIR__ . '/data';
if (!is_dir($dbDir)) {
    mkdir($dbDir, 0777, true);
}

$dbPath = $dbDir . '/aponhat.sqlite';

try {
    $pdo = new PDO("sqlite:" . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // Initialize tables
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT UNIQUE NOT NULL,
            email TEXT,
            password_hash TEXT NOT NULL,
            role TEXT DEFAULT 'customer', -- 'admin' or 'customer'
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS categories (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            slug TEXT NOT NULL,
            image TEXT,
            product_count INTEGER DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS products (
            id TEXT PRIMARY KEY, -- Greenish Trade ID e.g. 26081800002594
            title TEXT NOT NULL,
            category_id TEXT,
            category_name TEXT,
            subcategory TEXT,
            reseller_price REAL NOT NULL,
            retail_price REAL NOT NULL,
            stock INTEGER DEFAULT 50,
            image TEXT,
            images TEXT, -- JSON array of image URLs
            description TEXT,
            sizes TEXT, -- JSON array e.g. ['M', 'L', 'XL', 'XXL']
            sku TEXT,
            source_url TEXT NOT NULL,
            is_active INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_code TEXT UNIQUE NOT NULL,
            customer_name TEXT NOT NULL,
            phone TEXT NOT NULL,
            address TEXT NOT NULL,
            city TEXT NOT NULL,
            notes TEXT,
            payment_method TEXT NOT NULL, -- bkash, nagad, card, cod
            trx_id TEXT,
            sender_phone TEXT,
            subtotal REAL NOT NULL,
            delivery_fee REAL NOT NULL,
            total_amount REAL NOT NULL,
            status TEXT DEFAULT 'pending', -- pending, supplier_ordered, shipped, delivered, cancelled
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS order_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_id INTEGER NOT NULL,
            product_id TEXT NOT NULL, -- Supplier ID
            product_title TEXT NOT NULL,
            product_image TEXT,
            variant TEXT, -- e.g. Size: XL
            quantity INTEGER NOT NULL,
            unit_price REAL NOT NULL,
            supplier_price REAL NOT NULL,
            supplier_url TEXT NOT NULL,
            FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS settings (
            key TEXT PRIMARY KEY,
            value TEXT
        );
    ");

    // Seed default admin if not exists
    $adminPhone = '01617971644';
    $checkAdmin = $pdo->prepare("SELECT COUNT(*) as count FROM users WHERE role = 'admin'");
    $checkAdmin->execute();
    if ($checkAdmin->fetch()['count'] == 0) {
        $adminPassword = 'Admin@AponHat2026!';
        $adminHash = password_hash($adminPassword, PASSWORD_BCRYPT);
        $insertAdmin = $pdo->prepare("
            INSERT OR REPLACE INTO users (name, phone, email, password_hash, role)
            VALUES (:name, :phone, :email, :password_hash, 'admin')
        ");
        $insertAdmin->execute([
            ':name' => 'Store Owner (Admin)',
            ':phone' => $adminPhone,
            ':email' => 'admin@aponhat.com',
            ':password_hash' => $adminHash
        ]);
    }

    // Seed default settings if empty
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM settings");
    if ($stmt->fetch()['count'] == 0) {
        $defaultSettings = [
            'bkash_number' => '01617971644',
            'nagad_number' => '01309993470',
            'default_markup_percent' => '30',
            'delivery_dhaka' => '60',
            'delivery_outside' => '120',
            'store_name' => 'আপনহাট (AponHat)',
            'store_phone' => '01617971644',
            'store_email' => 'support@aponhat.com',
            'last_sync' => date('Y-m-d H:i:s')
        ];

        $insertSetting = $pdo->prepare("INSERT INTO settings (key, value) VALUES (:key, :value)");
        foreach ($defaultSettings as $k => $v) {
            $insertSetting->execute([':key' => $k, ':value' => $v]);
        }
    }

} catch (PDOException $e) {
    die(json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]));
}

function sendJsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

<?php
// api/categories.php - Categories API
require_once __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$stmt = $pdo->query("SELECT c.*, COUNT(p.id) as actual_products_count 
                     FROM categories c 
                     LEFT JOIN products p ON c.id = p.category_id AND p.is_active = 1
                     GROUP BY c.id 
                     ORDER BY c.id ASC");
$categories = $stmt->fetchAll();

sendJsonResponse([
    'status' => 'success',
    'count' => count($categories),
    'data' => $categories
]);

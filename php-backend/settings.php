<?php
// api/settings.php - Store Settings API
require_once __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if ($input && is_array($input)) {
        $stmt = $pdo->prepare("INSERT OR REPLACE INTO settings (key, value) VALUES (:key, :value)");
        foreach ($input as $k => $v) {
            $stmt->execute([':key' => $k, ':value' => strval($v)]);
        }
        sendJsonResponse(['status' => 'success', 'message' => 'Settings saved successfully']);
    }
}

$stmt = $pdo->query("SELECT key, value FROM settings");
$rows = $stmt->fetchAll();
$settings = [];
foreach ($rows as $r) {
    $settings[$r['key']] = $r['value'];
}

sendJsonResponse([
    'status' => 'success',
    'data' => $settings
]);

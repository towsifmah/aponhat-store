<?php
// api/auth.php - Dynamic Authentication & Strong Password Protector
require_once __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$action = isset($_GET['action']) ? trim($_GET['action']) : 'login';

// Function to validate strong password
function validateStrongPassword($password) {
    if (strlen($password) < 8) {
        return 'পাসওয়ার্ডটি কমপক্ষে ৮ অক্ষরের হতে হবে।';
    }
    if (!preg_match('/[A-Z]/', $password)) {
        return 'পাসওয়ার্ডে অন্তত একটি বড় হাতের অক্ষর (Uppercase letter) থাকতে হবে।';
    }
    if (!preg_match('/[a-z]/', $password)) {
        return 'পাসওয়ার্ডে অন্তত একটি ছোট হাতের অক্ষর (Lowercase letter) থাকতে হবে।';
    }
    if (!preg_match('/[0-9]/', $password)) {
        return 'পাসওয়ার্ডে অন্তত একটি সংখ্যা (Number) থাকতে হবে।';
    }
    if (!preg_match('/[\W_]/', $password)) {
        return 'পাসওয়ার্ডে অন্তত একটি বিশেষ চিহ্ন (Special character যেমন: @, #, $, !) থাকতে হবে।';
    }
    return true;
}

// 1. REGISTER
if ($action === 'register' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input || empty($input['name']) || empty($input['phone']) || empty($input['password'])) {
        sendJsonResponse(['status' => 'error', 'message' => 'নাম, মোবাইল নম্বর এবং পাসওয়ার্ড আবশ্যক।'], 400);
    }

    $name = trim($input['name']);
    $phone = trim($input['phone']);
    $email = isset($input['email']) ? trim($input['email']) : null;
    $password = $input['password'];

    // Strong password check
    $passCheck = validateStrongPassword($password);
    if ($passCheck !== true) {
        sendJsonResponse(['status' => 'error', 'message' => $passCheck], 400);
    }

    // Check if phone already registered
    $checkStmt = $pdo->prepare("SELECT id FROM users WHERE phone = :phone");
    $checkStmt->execute([':phone' => $phone]);
    if ($checkStmt->fetch()) {
        sendJsonResponse(['status' => 'error', 'message' => 'এই মোবাইল নম্বর দিয়ে ইতিমধ্যে একাউন্ট রয়েছে। দয়া করে লগইন করুন।'], 409);
    }

    $hash = password_hash($password, PASSWORD_BCRYPT);
    $role = 'customer';

    $insertStmt = $pdo->prepare("
        INSERT INTO users (name, phone, email, password_hash, role)
        VALUES (:name, :phone, :email, :password_hash, :role)
    ");
    $insertStmt->execute([
        ':name' => $name,
        ':phone' => $phone,
        ':email' => $email,
        ':password_hash' => $hash,
        ':role' => $role
    ]);

    $userId = $pdo->lastInsertId();
    $token = base64_encode($userId . ':' . $phone . ':' . time());

    sendJsonResponse([
        'status' => 'success',
        'message' => 'একাউন্ট সফলভাবে তৈরি হয়েছে!',
        'user' => [
            'id' => $userId,
            'name' => $name,
            'phone' => $phone,
            'email' => $email,
            'role' => $role
        ],
        'token' => $token
    ], 201);
}

// 2. LOGIN
if ($action === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input || empty($input['identifier']) || empty($input['password'])) {
        sendJsonResponse(['status' => 'error', 'message' => 'মোবাইল নম্বর এবং পাসওয়ার্ড প্রদান করুন।'], 400);
    }

    $identifier = trim($input['identifier']);
    $password = $input['password'];

    // Check by phone or email
    $stmt = $pdo->prepare("SELECT * FROM users WHERE phone = :id OR email = :id LIMIT 1");
    $stmt->execute([':id' => $identifier]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user['password_hash'])) {
        sendJsonResponse(['status' => 'error', 'message' => 'মোবাইল নম্বর অথবা পাসওয়ার্ড ভুল হয়েছে।'], 401);
    }

    $token = base64_encode($user['id'] . ':' . $user['phone'] . ':' . time());

    sendJsonResponse([
        'status' => 'success',
        'message' => 'সফলভাবে লগইন হয়েছে!',
        'user' => [
            'id' => $user['id'],
            'name' => $user['name'],
            'phone' => $user['phone'],
            'email' => $user['email'],
            'role' => $user['role']
        ],
        'token' => $token
    ]);
}

// 3. ME (Verify session)
if ($action === 'me') {
    $headers = getallheaders();
    $authHeader = isset($headers['Authorization']) ? $headers['Authorization'] : '';
    if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
        $decoded = base64_decode($matches[1]);
        $parts = explode(':', $decoded);
        if (count($parts) >= 2) {
            $userId = intval($parts[0]);
            $stmt = $pdo->prepare("SELECT id, name, phone, email, role FROM users WHERE id = :id");
            $stmt->execute([':id' => $userId]);
            if ($user = $stmt->fetch()) {
                sendJsonResponse(['status' => 'success', 'user' => $user]);
            }
        }
    }
    sendJsonResponse(['status' => 'error', 'message' => 'অননুমোদিত অ্যাক্সেস'], 401);
}

sendJsonResponse(['status' => 'error', 'message' => 'Invalid action'], 400);

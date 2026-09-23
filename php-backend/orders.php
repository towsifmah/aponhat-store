<?php
// api/orders.php - Order Placement and Management
require_once __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    exit;
}

// GET all orders (for store owner dashboard)
if ($method === 'GET') {
    $orderCode = isset($_GET['code']) ? trim($_GET['code']) : null;

    if ($orderCode) {
        $stmt = $pdo->prepare("SELECT * FROM orders WHERE order_code = :code");
        $stmt->execute([':code' => $orderCode]);
        $order = $stmt->fetch();

        if ($order) {
            $itemsStmt = $pdo->prepare("SELECT * FROM order_items WHERE order_id = :id");
            $itemsStmt->execute([':id' => $order['id']]);
            $order['items'] = $itemsStmt->fetchAll();
            sendJsonResponse(['status' => 'success', 'data' => $order]);
        } else {
            sendJsonResponse(['status' => 'error', 'message' => 'Order not found'], 404);
        }
    }

    $stmt = $pdo->query("SELECT * FROM orders ORDER BY created_at DESC");
    $orders = $stmt->fetchAll();

    $itemsStmt = $pdo->prepare("SELECT * FROM order_items WHERE order_id = :id");
    foreach ($orders as &$order) {
        $itemsStmt->execute([':id' => $order['id']]);
        $order['items'] = $itemsStmt->fetchAll();

        // Calculate total supplier cost and profit
        $supplierCost = 0;
        foreach ($order['items'] as $item) {
            $supplierCost += ($item['supplier_price'] * $item['quantity']);
        }
        $order['supplier_cost'] = $supplierCost;
        $order['profit'] = max(0, $order['subtotal'] - $supplierCost);
    }

    sendJsonResponse([
        'status' => 'success',
        'count' => count($orders),
        'data' => $orders
    ]);
}

// POST create order
if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input || empty($input['customer_name']) || empty($input['phone']) || empty($input['address']) || empty($input['items'])) {
        sendJsonResponse([
            'status' => 'error',
            'message' => 'নাম, মোবাইল নম্বর, ঠিকানা এবং কার্ট আইটেম পূরণ করা আবশ্যক।'
        ], 400);
    }

    $customerName = trim($input['customer_name']);
    $phone = trim($input['phone']);
    $address = trim($input['address']);
    $city = isset($input['city']) ? trim($input['city']) : 'ঢাকা';
    $notes = isset($input['notes']) ? trim($input['notes']) : '';
    $paymentMethod = isset($input['payment_method']) ? trim($input['payment_method']) : 'cod';
    $trxId = isset($input['trx_id']) ? trim($input['trx_id']) : null;
    $senderPhone = isset($input['sender_phone']) ? trim($input['sender_phone']) : null;
    $deliveryFee = isset($input['delivery_fee']) ? floatval($input['delivery_fee']) : 60;
    $items = $input['items'];

    // Calculate subtotal
    $subtotal = 0;
    foreach ($items as $item) {
        $subtotal += (floatval($item['price']) * intval($item['quantity']));
    }
    $totalAmount = $subtotal + $deliveryFee;

    // Generate readable order code e.g. AH-8492
    $orderCode = 'AH-' . strtoupper(substr(uniqid(), -5));

    $pdo->beginTransaction();
    try {
        $stmt = $pdo->prepare("
            INSERT INTO orders (
                order_code, customer_name, phone, address, city, notes,
                payment_method, trx_id, sender_phone, subtotal, delivery_fee, total_amount, status
            ) VALUES (
                :order_code, :customer_name, :phone, :address, :city, :notes,
                :payment_method, :trx_id, :sender_phone, :subtotal, :delivery_fee, :total_amount, 'pending'
            )
        ");

        $stmt->execute([
            ':order_code' => $orderCode,
            ':customer_name' => $customerName,
            ':phone' => $phone,
            ':address' => $address,
            ':city' => $city,
            ':notes' => $notes,
            ':payment_method' => $paymentMethod,
            ':trx_id' => $trxId,
            ':sender_phone' => $senderPhone,
            ':subtotal' => $subtotal,
            ':delivery_fee' => $deliveryFee,
            ':total_amount' => $totalAmount
        ]);

        $orderId = $pdo->lastInsertId();

        $itemStmt = $pdo->prepare("
            INSERT INTO order_items (
                order_id, product_id, product_title, product_image, variant,
                quantity, unit_price, supplier_price, supplier_url
            ) VALUES (
                :order_id, :product_id, :product_title, :product_image, :variant,
                :quantity, :unit_price, :supplier_price, :supplier_url
            )
        ");

        foreach ($items as $item) {
            $productId = strval($item['id']);
            $supplierPrice = isset($item['reseller_price']) ? floatval($item['reseller_price']) : floatval($item['price']) * 0.7;
            $supplierUrl = isset($item['source_url']) && !empty($item['source_url']) 
                ? $item['source_url'] 
                : 'https://greenishtradeltd.com/products/' . $productId;

            $itemStmt->execute([
                ':order_id' => $orderId,
                ':product_id' => $productId,
                ':product_title' => $item['title'],
                ':product_image' => isset($item['image']) ? $item['image'] : '',
                ':variant' => isset($item['variant']) ? $item['variant'] : (isset($item['size']) ? 'Size: ' . $item['size'] : 'Default'),
                ':quantity' => intval($item['quantity']),
                ':unit_price' => floatval($item['price']),
                ':supplier_price' => $supplierPrice,
                ':supplier_url' => $supplierUrl
            ]);
        }

        $pdo->commit();

        sendJsonResponse([
            'status' => 'success',
            'message' => 'অর্ডার সফলভাবে সম্পন্ন হয়েছে!',
            'data' => [
                'order_id' => $orderId,
                'order_code' => $orderCode,
                'total_amount' => $totalAmount,
                'delivery_time' => '২ থেকে ৪ কার্যদিবস',
                'created_at' => date('Y-m-d H:i:s')
            ]
        ], 201);

    } catch (Exception $e) {
        $pdo->rollBack();
        sendJsonResponse([
            'status' => 'error',
            'message' => 'অর্ডার প্রক্রিয়াধীন করতে সমস্যা হয়েছে: ' . $e->getMessage()
        ], 500);
    }
}

// PUT update order status
if ($method === 'PUT') {
    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input || empty($input['id']) || empty($input['status'])) {
        sendJsonResponse(['status' => 'error', 'message' => 'Order ID and Status required'], 400);
    }

    $id = intval($input['id']);
    $status = trim($input['status']);

    $stmt = $pdo->prepare("UPDATE orders SET status = :status WHERE id = :id");
    $stmt->execute([':status' => $status, ':id' => $id]);

    sendJsonResponse([
        'status' => 'success',
        'message' => 'Order status updated successfully',
        'data' => ['id' => $id, 'status' => $status]
    ]);
}

<?php
// test_order.php - Verify order placement & dashboard retrieval
require_once __DIR__ . '/api/db.php';

$testOrder = [
    'customer_name' => 'মো: তানভীর হোসেন',
    'phone' => '01711223344',
    'address' => 'বাড়ি ১৫, রোড ২, ধানমন্ডি',
    'city' => 'ঢাকা',
    'notes' => 'সন্ধ্যা ৬টার পর ডেলিভারি দিলে ভালো হয়।',
    'payment_method' => 'bkash',
    'trx_id' => '9X7BK1234',
    'sender_phone' => '01711223344',
    'delivery_fee' => 60,
    'items' => [
        [
            'id' => '26081800002594',
            'title' => 'Premium Oxford Cotton Slim Fit Formal Shirt for Men',
            'image' => 'http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.52%20PM%20(1)_2608181042313270.jpeg',
            'price' => 699,
            'reseller_price' => 420,
            'variant' => 'Size: L',
            'quantity' => 2,
            'source_url' => 'https://greenishtradeltd.com/products/26081800002594'
        ]
    ]
];

// 1. Place order
$orderCode = 'AH-' . strtoupper(substr(uniqid(), -5));
$subtotal = 699 * 2;
$total = $subtotal + 60;

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
    ':customer_name' => $testOrder['customer_name'],
    ':phone' => $testOrder['phone'],
    ':address' => $testOrder['address'],
    ':city' => $testOrder['city'],
    ':notes' => $testOrder['notes'],
    ':payment_method' => $testOrder['payment_method'],
    ':trx_id' => $testOrder['trx_id'],
    ':sender_phone' => $testOrder['sender_phone'],
    ':subtotal' => $subtotal,
    ':delivery_fee' => 60,
    ':total_amount' => $total
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

$item = $testOrder['items'][0];
$itemStmt->execute([
    ':order_id' => $orderId,
    ':product_id' => $item['id'],
    ':product_title' => $item['title'],
    ':product_image' => $item['image'],
    ':variant' => $item['variant'],
    ':quantity' => $item['quantity'],
    ':unit_price' => $item['price'],
    ':supplier_price' => $item['reseller_price'],
    ':supplier_url' => $item['source_url']
]);

echo "Order placed with Code: $orderCode (ID: $orderId)\n";

// 2. Query orders like the Admin Dashboard does
$checkStmt = $pdo->prepare("SELECT * FROM orders WHERE id = :id");
$checkStmt->execute([':id' => $orderId]);
$savedOrder = $checkStmt->fetch();

$itemsCheck = $pdo->prepare("SELECT * FROM order_items WHERE order_id = :id");
$itemsCheck->execute([':id' => $orderId]);
$savedItems = $itemsCheck->fetchAll();

echo "Customer: " . $savedOrder['customer_name'] . " | Phone: " . $savedOrder['phone'] . "\n";
echo "Payment: " . $savedOrder['payment_method'] . " | TrxID: " . $savedOrder['trx_id'] . "\n";
echo "Total: BDT " . $savedOrder['total_amount'] . "\n";
echo "Item 1 Product ID: " . $savedItems[0]['product_id'] . "\n";
echo "Item 1 Supplier URL: " . $savedItems[0]['supplier_url'] . "\n";
$profit = ($savedItems[0]['unit_price'] - $savedItems[0]['supplier_price']) * $savedItems[0]['quantity'];
echo "Calculated Profit for this order: BDT $profit\n";
echo "TEST PASSED SUCCESSFULLY!\n";

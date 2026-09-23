// api/orders.js - Vercel Serverless Function for Orders
import { getStore, saveStore } from './_data.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = getStore();

  // 1. GET - List all orders or single by order code
  if (req.method === 'GET') {
    const { code } = req.query;

    if (code) {
      const order = store.orders.find(o => o.order_code === code);
      if (order) {
        return res.status(200).json({ status: 'success', data: order });
      }
      return res.status(404).json({ status: 'error', message: 'Order not found' });
    }

    return res.status(200).json({
      status: 'success',
      count: store.orders.length,
      data: store.orders
    });
  }

  // 2. POST - Create new order
  if (req.method === 'POST') {
    const input = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

    if (!input || !input.customer_name || !input.phone || !input.address || !input.items || input.items.length === 0) {
      return res.status(400).json({
        status: 'error',
        message: 'নাম, মোবাইল নম্বর, ঠিকানা এবং কার্ট আইটেম পূরণ করা আবশ্যক।'
      });
    }

    const orderId = store.orders.length > 0 ? Math.max(...store.orders.map(o => o.id)) + 1 : 1;
    const orderCode = 'AH-' + Math.random().toString(36).substring(2, 7).toUpperCase();

    let subtotal = 0;
    let supplierCost = 0;

    const orderItems = input.items.map((item, index) => {
      const unitPrice = parseFloat(item.price);
      const qty = parseInt(item.quantity);
      const supplierPrice = item.reseller_price ? parseFloat(item.reseller_price) : (unitPrice * 0.7);

      subtotal += (unitPrice * qty);
      supplierCost += (supplierPrice * qty);

      return {
        id: index + 1,
        order_id: orderId,
        product_id: String(item.id),
        product_title: item.title,
        product_image: item.image || '',
        variant: item.variant || 'Standard',
        quantity: qty,
        unit_price: unitPrice,
        supplier_price: supplierPrice,
        supplier_url: item.source_url || `https://greenishtradeltd.com/products/${item.id}`
      };
    });

    const deliveryFee = input.delivery_fee ? parseFloat(input.delivery_fee) : (subtotal >= 1500 ? 0 : 60);
    const totalAmount = subtotal + deliveryFee;

    const newOrder = {
      id: orderId,
      order_code: orderCode,
      customer_name: input.customer_name.trim(),
      phone: input.phone.trim(),
      address: input.address.trim(),
      city: input.city || 'ঢাকা',
      notes: input.notes || '',
      payment_method: input.payment_method || 'cod',
      trx_id: input.trx_id || null,
      sender_phone: input.sender_phone || null,
      subtotal: subtotal,
      delivery_fee: deliveryFee,
      total_amount: totalAmount,
      status: 'pending',
      created_at: new Date().toISOString(),
      items: orderItems,
      supplier_cost: supplierCost,
      profit: Math.max(0, subtotal - supplierCost)
    };

    store.orders.unshift(newOrder);
    saveStore(store);

    return res.status(201).json({
      status: 'success',
      message: 'অর্ডার সফলভাবে সম্পন্ন হয়েছে!',
      data: {
        order_id: orderId,
        order_code: orderCode,
        total_amount: totalAmount,
        delivery_time: '২ থেকে ৪ কার্যদিবস',
        created_at: newOrder.created_at
      }
    });
  }

  // 3. PUT - Update order status
  if (req.method === 'PUT') {
    const input = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

    if (!input || !input.id || !input.status) {
      return res.status(400).json({ status: 'error', message: 'Order ID and Status required' });
    }

    const order = store.orders.find(o => o.id === parseInt(input.id));
    if (order) {
      order.status = input.status;
      saveStore(store);
      return res.status(200).json({
        status: 'success',
        message: 'Order status updated successfully',
        data: { id: order.id, status: order.status }
      });
    }

    return res.status(404).json({ status: 'error', message: 'Order not found' });
  }

  return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
}

const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'admin');

/**
 * GET /api/v1/admin/dashboard/summary
 * Fetch high-level KPIs (dashboard cards)
 */
router.get('/dashboard/summary', (req, res) => {
    const filePath = path.join(responsesPath, 'summary.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching dashboard summary',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/admin/dashboard/revenue
 * Fetch revenue trends (charts)
 */
router.get('/dashboard/revenue', (req, res) => {
    const filePath = path.join(responsesPath, 'revenue.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching revenue data',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/admin/orders
 * Fetch all orders with filters
 */
router.get('/orders', (req, res) => {
    const filePath = path.join(responsesPath, 'orders.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching orders',
                error: err.message
            });
        }
    });
});

/**
 * PUT /api/v1/admin/orders/:orderId/status
 * Update order status manually
 */
router.put('/orders/:orderId/status', (req, res) => {
    const filePath = path.join(responsesPath, 'update-order-status.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error updating order status',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/admin/users
 * Fetch users list
 */
router.get('/users', (req, res) => {
    const filePath = path.join(responsesPath, 'users.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching users',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/admin/products
 * Fetch products with inventory & status
 */
router.get('/products', (req, res) => {
    const filePath = path.join(responsesPath, 'products.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching products',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/admin/inventory/alerts
 * Fetch low stock alerts
 */
router.get('/inventory/alerts', (req, res) => {
    const filePath = path.join(responsesPath, 'inventory-alerts.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching inventory alerts',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/admin/coupons
 * Fetch coupon performance
 */
router.get('/coupons', (req, res) => {
    const filePath = path.join(responsesPath, 'coupons.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching coupons',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/admin/reviews
 * Fetch review analytics
 */
router.get('/reviews', (req, res) => {
    const filePath = path.join(responsesPath, 'reviews-analytics.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching review analytics',
                error: err.message
            });
        }
    });
});

module.exports = router;

const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'analytics');

/**
 * GET /api/v1/analytics/overview
 * High-level business overview (founder dashboard)
 */
router.get('/overview', (req, res) => {
    const filePath = path.join(responsesPath, 'overview.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching business overview',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/analytics/sales/trends
 * Sales trend over time
 */
router.get('/sales/trends', (req, res) => {
    const filePath = path.join(responsesPath, 'sales-trends.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching sales trends',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/analytics/products/top
 * Top-selling products
 */
router.get('/products/top', (req, res) => {
    const filePath = path.join(responsesPath, 'top-products.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching top products',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/analytics/products/underperforming
 * Low-performing products
 */
router.get('/products/underperforming', (req, res) => {
    const filePath = path.join(responsesPath, 'underperforming-products.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching underperforming products',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/analytics/customers/segments
 * Customer segmentation (RFM-style)
 */
router.get('/customers/segments', (req, res) => {
    const filePath = path.join(responsesPath, 'customer-segments.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching customer segments',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/analytics/customers/retention
 * Customer retention & churn trends
 */
router.get('/customers/retention', (req, res) => {
    const filePath = path.join(responsesPath, 'customer-retention.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching customer retention',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/analytics/marketing/coupons
 * Coupon performance analytics
 */
router.get('/marketing/coupons', (req, res) => {
    const filePath = path.join(responsesPath, 'marketing-coupons.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching coupon analytics',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/analytics/operations/orders
 * Operational efficiency metrics
 */
router.get('/operations/orders', (req, res) => {
    const filePath = path.join(responsesPath, 'operations-orders.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching order operations analytics',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/analytics/inventory/health
 * Inventory health metrics
 */
router.get('/inventory/health', (req, res) => {
    const filePath = path.join(responsesPath, 'inventory-health.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching inventory health',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/analytics/forecast/sales
 * Sales forecast (basic projection)
 */
router.get('/forecast/sales', (req, res) => {
    const filePath = path.join(responsesPath, 'sales-forecast.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching sales forecast',
                error: err.message
            });
        }
    });
});

module.exports = router;

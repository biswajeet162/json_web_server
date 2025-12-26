const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'inventory');

/**
 * GET /api/v1/inventory/bulk
 * Fetch inventory for multiple products (used by cart & checkout)
 * Query params: productIds=101,102,103
 * NOTE: Must be defined before /:productId route
 */
router.get('/bulk', (req, res) => {
    const filePath = path.join(responsesPath, 'bulk-inventory.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching bulk inventory',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/inventory/low-stock
 * Fetch products with low stock (admin dashboard)
 * NOTE: Must be defined before /:productId route
 */
router.get('/low-stock', (req, res) => {
    const filePath = path.join(responsesPath, 'low-stock.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching low stock products',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/inventory/:productId
 * Fetch inventory details for a product
 * NOTE: This must be defined after /bulk and /low-stock
 */
router.get('/:productId', (req, res) => {
    const filePath = path.join(responsesPath, 'get-inventory.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching inventory',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/inventory/reserve
 * Reserve stock when order is placed (soft lock)
 */
router.post('/reserve', (req, res) => {
    const filePath = path.join(responsesPath, 'reserve.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error reserving stock',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/inventory/release
 * Release reserved stock (order cancelled / payment failed)
 */
router.post('/release', (req, res) => {
    const filePath = path.join(responsesPath, 'release.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error releasing stock',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/inventory/confirm
 * Confirm stock deduction after payment success
 */
router.post('/confirm', (req, res) => {
    const filePath = path.join(responsesPath, 'confirm.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error confirming stock',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/inventory/adjust
 * Adjust stock (damage, return, manual correction) - ADMIN
 */
router.post('/adjust', (req, res) => {
    const filePath = path.join(responsesPath, 'adjust.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error adjusting inventory',
                error: err.message
            });
        }
    });
});

/**
 * PUT /api/v1/inventory/:productId
 * Update stock manually (admin panel)
 */
router.put('/:productId', (req, res) => {
    const filePath = path.join(responsesPath, 'update-inventory.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error updating inventory',
                error: err.message
            });
        }
    });
});

module.exports = router;

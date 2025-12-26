const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'ops');

/**
 * GET /api/v1/ops/orders/funnel
 * Order funnel analysis (drop-offs at each stage)
 */
router.get('/orders/funnel', (req, res) => {
    const filePath = path.join(responsesPath, 'order-funnel.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching order funnel',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/ops/orders/cancellations
 * Order cancellation reasons
 */
router.get('/orders/cancellations', (req, res) => {
    const filePath = path.join(responsesPath, 'order-cancellations.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching order cancellations',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/ops/delivery/performance
 * Delivery performance metrics
 */
router.get('/delivery/performance', (req, res) => {
    const filePath = path.join(responsesPath, 'delivery-performance.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching delivery performance',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/ops/returns/analysis
 * Return & refund analysis
 */
router.get('/returns/analysis', (req, res) => {
    const filePath = path.join(responsesPath, 'returns-analysis.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching return analysis',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/ops/inventory/aging
 * Inventory aging (warehouse efficiency)
 */
router.get('/inventory/aging', (req, res) => {
    const filePath = path.join(responsesPath, 'inventory-aging.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching inventory aging',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/ops/growth/acquisition
 * User acquisition metrics
 */
router.get('/growth/acquisition', (req, res) => {
    const filePath = path.join(responsesPath, 'growth-acquisition.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching user acquisition',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/ops/growth/retention
 * Retention cohorts
 */
router.get('/growth/retention', (req, res) => {
    const filePath = path.join(responsesPath, 'growth-retention.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching retention analysis',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/ops/growth/ltv
 * Customer lifetime value analysis
 */
router.get('/growth/ltv', (req, res) => {
    const filePath = path.join(responsesPath, 'growth-ltv.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching customer LTV',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/ops/growth/experiments
 * A/B test & experiment performance
 */
router.get('/growth/experiments', (req, res) => {
    const filePath = path.join(responsesPath, 'growth-experiments.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching experiment results',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/ops/growth/recommendations
 * Actionable growth recommendations (rule-based)
 */
router.get('/growth/recommendations', (req, res) => {
    const filePath = path.join(responsesPath, 'growth-recommendations.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching growth recommendations',
                error: err.message
            });
        }
    });
});

module.exports = router;

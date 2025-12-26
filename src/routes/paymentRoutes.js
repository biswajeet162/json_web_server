const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'payments');

/**
 * POST /api/v1/payments/initiate
 * Initiate payment for an order (used for ONLINE or COD)
 */
router.post('/initiate', (req, res) => {
    const { paymentMethod } = req.body;

    let fileName = 'initiate-online.json';
    if (paymentMethod === 'COD') {
        fileName = 'initiate-cod.json';
    }

    const filePath = path.join(responsesPath, fileName);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error initiating payment',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/payments/verify
 * Verify online payment after gateway callback
 */
router.post('/verify', (req, res) => {
    // Mock logic: randomly return success or failure or based on some trigger
    // For now, always return success unless specified
    const filePath = path.join(responsesPath, 'verify-success.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error verifying payment',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/payments/history
 * Fetch user's payment history (paginated)
 */
router.get('/history', (req, res) => {
    const filePath = path.join(responsesPath, 'history.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching payment history',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/payments/:orderId
 * Fetch payment status by order ID (used for polling)
 */
router.get('/:orderId', (req, res) => {
    const filePath = path.join(responsesPath, 'status.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching payment status',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/payments/:orderId/retry
 * Retry failed online payment
 */
router.post('/:orderId/retry', (req, res) => {
    const filePath = path.join(responsesPath, 'retry.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error retrying payment',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/payments/:orderId/cancel
 * Cancel payment
 */
router.post('/:orderId/cancel', (req, res) => {
    const filePath = path.join(responsesPath, 'cancel.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error cancelling payment',
                error: err.message
            });
        }
    });
});

module.exports = router;

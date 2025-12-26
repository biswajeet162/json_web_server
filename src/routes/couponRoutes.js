const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'coupons');

/**
 * POST /api/v1/coupons/apply
 * Apply coupon to cart (checkout screen)
 */
router.post('/apply', (req, res) => {
    // Mock logic: return valid by default
    const filePath = path.join(responsesPath, 'apply-valid.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error applying coupon',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/coupons/validate
 * Validate coupon without applying
 */
router.post('/validate', (req, res) => {
    const filePath = path.join(responsesPath, 'validate.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error validating coupon',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/coupons/available
 * Fetch available coupons for logged-in user
 * NOTE: Must be defined before /:couponCode route
 */
router.get('/available', (req, res) => {
    const filePath = path.join(responsesPath, 'available.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching available coupons',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/coupons/usage
 * Coupon usage analytics (admin dashboard)
 * NOTE: Must be defined before /:couponCode route
 */
router.get('/usage', (req, res) => {
    const filePath = path.join(responsesPath, 'usage.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching coupon usage',
                error: err.message
            });
        }
    });
});

/**
 * DELETE /api/v1/coupons/remove
 * Remove applied coupon from cart
 * NOTE: Must be defined before /:couponCode route
 */
router.delete('/remove', (req, res) => {
    const filePath = path.join(responsesPath, 'remove.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error removing coupon',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/coupons
 * Create a new coupon (ADMIN)
 */
router.post('/', (req, res) => {
    const filePath = path.join(responsesPath, 'create.json');
    res.status(201).sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error creating coupon',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/coupons/:couponCode
 * Fetch coupon details
 * NOTE: This must be defined after /available, /usage, /remove
 */
router.get('/:couponCode', (req, res) => {
    const filePath = path.join(responsesPath, 'get-coupon.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching coupon',
                error: err.message
            });
        }
    });
});

/**
 * PUT /api/v1/coupons/:couponCode
 * Update coupon details (ADMIN)
 */
router.put('/:couponCode', (req, res) => {
    const filePath = path.join(responsesPath, 'update.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error updating coupon',
                error: err.message
            });
        }
    });
});

/**
 * DELETE /api/v1/coupons/:couponCode
 * Deactivate / delete coupon (ADMIN)
 */
router.delete('/:couponCode', (req, res) => {
    const filePath = path.join(responsesPath, 'delete.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error deleting coupon',
                error: err.message
            });
        }
    });
});

module.exports = router;

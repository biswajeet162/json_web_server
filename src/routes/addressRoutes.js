const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'addresses');

/**
 * POST /api/v1/addresses/validate
 * Validate address for delivery eligibility (pincode check)
 * NOTE: Must be defined before /:addressId route
 */
router.post('/validate', (req, res) => {
    // Mock logic: return serviceable by default
    const filePath = path.join(responsesPath, 'validate-serviceable.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error validating address',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/addresses
 * Fetch all saved addresses of logged-in user
 */
router.get('/', (req, res) => {
    const filePath = path.join(responsesPath, 'list.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching addresses',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/addresses
 * Add new delivery address
 */
router.post('/', (req, res) => {
    const filePath = path.join(responsesPath, 'create.json');
    res.status(201).sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error creating address',
                error: err.message
            });
        }
    });
});

/**
 * PUT /api/v1/addresses/:addressId/default
 * Mark address as default
 * NOTE: Must be defined before /:addressId route
 */
router.put('/:addressId/default', (req, res) => {
    const filePath = path.join(responsesPath, 'set-default.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error setting default address',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/addresses/:addressId
 * Fetch address by ID
 * NOTE: This must be defined after /validate and /:addressId/default
 */
router.get('/:addressId', (req, res) => {
    const filePath = path.join(responsesPath, 'get-address.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching address',
                error: err.message
            });
        }
    });
});

/**
 * PUT /api/v1/addresses/:addressId
 * Update an existing address
 */
router.put('/:addressId', (req, res) => {
    const filePath = path.join(responsesPath, 'update.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error updating address',
                error: err.message
            });
        }
    });
});

/**
 * DELETE /api/v1/addresses/:addressId
 * Delete address
 */
router.delete('/:addressId', (req, res) => {
    const filePath = path.join(responsesPath, 'delete.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error deleting address',
                error: err.message
            });
        }
    });
});

module.exports = router;

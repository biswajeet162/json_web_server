const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'reviews');

/**
 * GET /api/v1/reviews/pending
 * Fetch reviews pending moderation (ADMIN)
 * NOTE: Must be defined before /product/:productId and /user routes
 */
router.get('/pending', (req, res) => {
    const filePath = path.join(responsesPath, 'pending-reviews.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching pending reviews',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/reviews/user
 * Fetch reviews submitted by logged-in user
 * NOTE: Must be defined before /product/:productId route
 */
router.get('/user', (req, res) => {
    const filePath = path.join(responsesPath, 'user-reviews.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching user reviews',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/reviews/product/:productId
 * Fetch reviews for a product (paginated)
 * NOTE: Must be defined after /pending and /user routes
 */
router.get('/product/:productId', (req, res) => {
    const filePath = path.join(responsesPath, 'product-reviews.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching product reviews',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/reviews
 * Submit a review for a product
 */
router.post('/', (req, res) => {
    const filePath = path.join(responsesPath, 'create.json');
    res.status(201).sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error creating review',
                error: err.message
            });
        }
    });
});

/**
 * PUT /api/v1/reviews/:reviewId/moderate
 * Approve or reject a review (ADMIN)
 * NOTE: Must be defined before /:reviewId route
 */
router.put('/:reviewId/moderate', (req, res) => {
    const filePath = path.join(responsesPath, 'moderate.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error moderating review',
                error: err.message
            });
        }
    });
});

/**
 * PUT /api/v1/reviews/:reviewId
 * Update an existing review
 */
router.put('/:reviewId', (req, res) => {
    const filePath = path.join(responsesPath, 'update.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error updating review',
                error: err.message
            });
        }
    });
});

/**
 * DELETE /api/v1/reviews/:reviewId
 * Delete user's own review
 */
router.delete('/:reviewId', (req, res) => {
    const filePath = path.join(responsesPath, 'delete.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error deleting review',
                error: err.message
            });
        }
    });
});

module.exports = router;

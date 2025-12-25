const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'cart');

/**
 * GET /api/v1/cart
 * Fetch current user's cart (used on cart screen)
 */
router.get('/', (req, res) => {
  const filePath = path.join(responsesPath, 'get.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading cart',
        error: err.message
      });
    }
  });
});

/**
 * GET /api/v1/cart/summary
 * Fetch cart price summary (used on checkout screen)
 * NOTE: Must be defined before /items/:cartItemId route
 */
router.get('/summary', (req, res) => {
  const filePath = path.join(responsesPath, 'summary.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading cart summary',
        error: err.message
      });
    }
  });
});

/**
 * POST /api/v1/cart/items
 * Add a product to cart
 * Request body: CartItemRequestDto
 */
router.post('/items', (req, res) => {
  const filePath = path.join(responsesPath, 'add-item.json');
  res.status(201).sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error adding item to cart',
        error: err.message
      });
    }
  });
});

/**
 * PUT /api/v1/cart/items/:cartItemId
 * Update quantity of a cart item
 * Request body: { quantity }
 */
router.put('/items/:cartItemId', (req, res) => {
  const filePath = path.join(responsesPath, 'update-item.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error updating cart item',
        error: err.message
      });
    }
  });
});

/**
 * DELETE /api/v1/cart/items/:cartItemId
 * Remove an item from cart
 */
router.delete('/items/:cartItemId', (req, res) => {
  const filePath = path.join(responsesPath, 'remove-item.json');
  res.status(200).sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error removing item from cart',
        error: err.message
      });
    }
  });
});

/**
 * POST /api/v1/cart/validate
 * Validate cart before checkout (stock & price validation)
 */
router.post('/validate', (req, res) => {
  const filePath = path.join(responsesPath, 'validate.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error validating cart',
        error: err.message
      });
    }
  });
});

/**
 * DELETE /api/v1/cart/clear
 * Clear entire cart (used after order placement)
 */
router.delete('/clear', (req, res) => {
  const filePath = path.join(responsesPath, 'clear.json');
  res.status(200).sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error clearing cart',
        error: err.message
      });
    }
  });
});

module.exports = router;


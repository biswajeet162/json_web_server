const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses');

/**
 * GET /api/products
 * Returns a list of products
 */
router.get('/products', (req, res) => {
  const filePath = path.join(responsesPath, 'products', 'list.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading products list',
        error: err.message
      });
    }
  });
});

/**
 * GET /api/products/:id
 * Returns a single product by ID
 */
router.get('/products/:id', (req, res) => {
  const filePath = path.join(responsesPath, 'products', 'detail.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading product details',
        error: err.message
      });
    }
  });
});

/**
 * POST /api/auth/login
 * Authenticates a user
 */
router.post('/auth/login', (req, res) => {
  const filePath = path.join(responsesPath, 'auth', 'login.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error processing login',
        error: err.message
      });
    }
  });
});

/**
 * GET /api/cart
 * Returns the user's cart
 */
router.get('/cart', (req, res) => {
  const filePath = path.join(responsesPath, 'cart', 'get.json');
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

module.exports = router;


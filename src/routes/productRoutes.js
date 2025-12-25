const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'products');

/**
 * GET /api/v1/products
 * Fetch all products with pagination and sorting
 * Query params: page (default 0), size (default 20), sort (default: "createdAt,desc")
 */
router.get('/', (req, res) => {
  const filePath = path.join(responsesPath, 'list.json');
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
 * GET /api/v1/products/search
 * Search products by keyword (name)
 * Query param: keyword (required)
 * NOTE: Must be defined before /:productId route
 */
router.get('/search', (req, res) => {
  const filePath = path.join(responsesPath, 'search.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error searching products',
        error: err.message
      });
    }
  });
});

/**
 * GET /api/v1/products/filter
 * Filter products by price and rating
 * Query params: minPrice, maxPrice, minRating
 * NOTE: Must be defined before /:productId route
 */
router.get('/filter', (req, res) => {
  const filePath = path.join(responsesPath, 'filter.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error filtering products',
        error: err.message
      });
    }
  });
});

/**
 * GET /api/v1/products/category/:categoryId
 * Fetch products by category
 * Query params: page, size
 * NOTE: Must be defined before /:productId route
 */
router.get('/category/:categoryId', (req, res) => {
  const filePath = path.join(responsesPath, 'by-category.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading products by category',
        error: err.message
      });
    }
  });
});

/**
 * GET /api/v1/products/:productId
 * Fetch product details by ID
 * NOTE: This must be defined last to avoid matching /search, /filter, /category
 */
router.get('/:productId', (req, res) => {
  const filePath = path.join(responsesPath, 'detail.json');
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
 * POST /api/v1/products
 * Create a new product (Admin only)
 * Request body: ProductCreateRequestDto
 */
router.post('/', (req, res) => {
  const filePath = path.join(responsesPath, 'create.json');
  res.status(201).sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error creating product',
        error: err.message
      });
    }
  });
});

/**
 * PUT /api/v1/products/:productId
 * Update product (Admin only)
 * Request body: ProductUpdateRequestDto
 */
router.put('/:productId', (req, res) => {
  const filePath = path.join(responsesPath, 'update.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error updating product',
        error: err.message
      });
    }
  });
});

/**
 * DELETE /api/v1/products/:productId
 * Delete product (Admin only)
 */
router.delete('/:productId', (req, res) => {
  const filePath = path.join(responsesPath, 'delete.json');
  res.status(200).sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error deleting product',
        error: err.message
      });
    }
  });
});

module.exports = router;


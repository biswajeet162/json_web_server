const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'categories');

/**
 * GET /api/v1/categories
 * Fetch ALL categories in a hierarchical tree (for home page & menu)
 */
router.get('/', (req, res) => {
  const filePath = path.join(responsesPath, 'list.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading categories',
        error: err.message
      });
    }
  });
});

/**
 * GET /api/v1/categories/slug/:slug
 * Fetch category by slug (SEO friendly)
 * NOTE: Must be defined before /:categoryId route
 */
router.get('/slug/:slug', (req, res) => {
  const filePath = path.join(responsesPath, 'by-slug.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading category by slug',
        error: err.message
      });
    }
  });
});

/**
 * GET /api/v1/categories/:categoryId/children
 * Fetch child categories of a parent
 * NOTE: Must be defined before /:categoryId route
 */
router.get('/:categoryId/children', (req, res) => {
  const filePath = path.join(responsesPath, 'children.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading child categories',
        error: err.message
      });
    }
  });
});

/**
 * GET /api/v1/categories/:categoryId
 * Fetch category details by ID
 * NOTE: This must be defined last to avoid matching /slug/:slug and /:categoryId/children
 */
router.get('/:categoryId', (req, res) => {
  const filePath = path.join(responsesPath, 'detail.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading category details',
        error: err.message
      });
    }
  });
});

/**
 * POST /api/v1/categories
 * Create a new category (Admin only)
 * Request body: CategoryCreateRequestDto
 */
router.post('/', (req, res) => {
  const filePath = path.join(responsesPath, 'create.json');
  res.status(201).sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error creating category',
        error: err.message
      });
    }
  });
});

/**
 * PUT /api/v1/categories/:categoryId
 * Update category details (Admin only)
 * Request body: CategoryUpdateRequestDto
 */
router.put('/:categoryId', (req, res) => {
  const filePath = path.join(responsesPath, 'update.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error updating category',
        error: err.message
      });
    }
  });
});

/**
 * DELETE /api/v1/categories/:categoryId
 * Delete category (Admin only)
 */
router.delete('/:categoryId', (req, res) => {
  const filePath = path.join(responsesPath, 'delete.json');
  res.status(200).sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error deleting category',
        error: err.message
      });
    }
  });
});

module.exports = router;


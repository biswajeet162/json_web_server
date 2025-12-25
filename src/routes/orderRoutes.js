const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'orders');

/**
 * GET /api/v1/orders
 * Fetch logged-in user's order history (paginated)
 * Query params: page (default 0), size (default 10)
 */
router.get('/', (req, res) => {
  const filePath = path.join(responsesPath, 'list.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading orders',
        error: err.message
      });
    }
  });
});

/**
 * POST /api/v1/orders
 * Place a new order (checkout)
 * Request body: { addressId, paymentMethod }
 */
router.post('/', (req, res) => {
  const filePath = path.join(responsesPath, 'create.json');
  res.status(201).sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error placing order',
        error: err.message
      });
    }
  });
});

/**
 * GET /api/v1/orders/:orderId/status
 * Fetch only order status (for polling / live updates)
 * NOTE: Must be defined before /:orderId route
 */
router.get('/:orderId/status', (req, res) => {
  const filePath = path.join(responsesPath, 'status.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading order status',
        error: err.message
      });
    }
  });
});

/**
 * GET /api/v1/orders/:orderId/invoice
 * Download order invoice (PDF URL)
 * NOTE: Must be defined before /:orderId route
 */
router.get('/:orderId/invoice', (req, res) => {
  const filePath = path.join(responsesPath, 'invoice.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading invoice',
        error: err.message
      });
    }
  });
});

/**
 * POST /api/v1/orders/:orderId/cancel
 * Cancel order (allowed only before SHIPPED)
 * NOTE: Must be defined before /:orderId route
 */
router.post('/:orderId/cancel', (req, res) => {
  const filePath = path.join(responsesPath, 'cancel.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error cancelling order',
        error: err.message
      });
    }
  });
});

/**
 * POST /api/v1/orders/:orderId/return
 * Return order (after delivery)
 * Request body: { reason }
 * NOTE: Must be defined before /:orderId route
 */
router.post('/:orderId/return', (req, res) => {
  const filePath = path.join(responsesPath, 'return.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error initiating return',
        error: err.message
      });
    }
  });
});

/**
 * GET /api/v1/orders/:orderId
 * Fetch order details (order detail screen)
 * NOTE: This must be defined last to avoid matching /status, /invoice, /cancel, /return
 */
router.get('/:orderId', (req, res) => {
  const filePath = path.join(responsesPath, 'detail.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading order details',
        error: err.message
      });
    }
  });
});

module.exports = router;


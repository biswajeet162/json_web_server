const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'notifications');

/**
 * POST /api/v1/notifications/sms
 * Send SMS notification (OTP, order updates)
 */
router.post('/sms', (req, res) => {
    const filePath = path.join(responsesPath, 'send-sms.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error sending SMS',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/notifications/email
 * Send Email notification (invoice, order confirmation)
 */
router.post('/email', (req, res) => {
    const filePath = path.join(responsesPath, 'send-email.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error sending email',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/notifications/push
 * Send push notification (mobile app)
 */
router.post('/push', (req, res) => {
    const filePath = path.join(responsesPath, 'send-push.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error sending push notification',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/notifications/bulk
 * Send bulk notifications (admin/promotional)
 */
router.post('/bulk', (req, res) => {
    const filePath = path.join(responsesPath, 'send-bulk.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error sending bulk notification',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/notifications
 * Fetch notification history for logged-in user
 */
router.get('/', (req, res) => {
    const filePath = path.join(responsesPath, 'list.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching notifications',
                error: err.message
            });
        }
    });
});

/**
 * PUT /api/v1/notifications/:notificationId/read
 * Mark notification as read
 */
router.put('/:notificationId/read', (req, res) => {
    const filePath = path.join(responsesPath, 'mark-read.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error marking notification as read',
                error: err.message
            });
        }
    });
});

module.exports = router;

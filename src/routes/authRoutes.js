const express = require('express');
const path = require('path');
const router = express.Router();

// Base path for JSON response files
const responsesPath = path.join(__dirname, '..', 'responses', 'auth');

/**
 * POST /api/v1/auth/login
 * Login using mobile number (OTP will be sent)
 */
router.post('/login', (req, res) => {
    const filePath = path.join(responsesPath, 'login.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error sending OTP',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/auth/verify-otp
 * Verify OTP and issue JWT tokens
 */
router.post('/verify-otp', (req, res) => {
    // Mock logic: randomly return existing or new user
    // For now, return existing user by default
    const filePath = path.join(responsesPath, 'verify-otp-existing.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error verifying OTP',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/auth/refresh-token
 * Generate new access token using refresh token
 */
router.post('/refresh-token', (req, res) => {
    const filePath = path.join(responsesPath, 'refresh-token.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error refreshing token',
                error: err.message
            });
        }
    });
});

/**
 * POST /api/v1/auth/logout
 * Logout user (invalidate refresh token)
 */
router.post('/logout', (req, res) => {
    const filePath = path.join(responsesPath, 'logout.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error logging out',
                error: err.message
            });
        }
    });
});

/**
 * GET /api/v1/auth/me
 * Fetch logged-in user profile
 */
router.get('/me', (req, res) => {
    const filePath = path.join(responsesPath, 'me.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error fetching user profile',
                error: err.message
            });
        }
    });
});

/**
 * PUT /api/v1/auth/profile
 * Update user profile
 */
router.put('/profile', (req, res) => {
    const filePath = path.join(responsesPath, 'update-profile.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: 'Error updating profile',
                error: err.message
            });
        }
    });
});

module.exports = router;

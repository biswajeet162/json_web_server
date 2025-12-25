const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const path = require('path');

const app = express();

// Enable CORS for all origins (browser apps and Flutter apps)
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Register API routes
app.use('/api', routes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ success: true, message: 'Server is running', timestamp: new Date().toISOString() });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mock API Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

module.exports = app;


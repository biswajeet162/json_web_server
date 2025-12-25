# Mock REST API Server

A lightweight mock REST API server built with Node.js and Express.js, designed to serve static JSON responses. Perfect for frontend development, testing, and Flutter app development.

## Features

- ✅ Express.js based REST API
- ✅ CORS enabled for browser and mobile apps
- ✅ Static JSON file responses (no database)
- ✅ Clean, scalable code structure
- ✅ Production-ready folder organization
- ✅ Ready for Render deployment

## Project Structure

```
mock-server/
 ├── src/
 │   ├── app.js                     # Express bootstrap
 │   ├── routes/
 │   │   └── routes.js               # ALL API ROUTES HERE
 │   └── responses/
 │       ├── products/
 │       │   ├── list.json
 │       │   └── detail.json
 │       ├── auth/
 │       │   └── login.json
 │       └── cart/
 │           └── get.json
 ├── package.json
 └── README.md
```

## API Endpoints

### Products

- **GET** `/api/products` - Get list of products
- **GET** `/api/products/:id` - Get product details by ID

### Authentication

- **POST** `/api/auth/login` - User login

### Cart

- **GET** `/api/cart` - Get user's cart

### Health Check

- **GET** `/health` - Server health check

## Response Format

All API responses follow this structure:

```json
{
  "success": true,
  "message": "Optional message",
  "data": { ... },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000` by default.

### Testing Endpoints

You can test the endpoints using curl, Postman, or any HTTP client:

```bash
# Get products list
curl http://localhost:3000/api/products

# Get product details
curl http://localhost:3000/api/products/1

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password"}'

# Get cart
curl http://localhost:3000/api/cart

# Health check
curl http://localhost:3000/health
```

## Deployment on Render

### Step 1: Prepare Your Repository

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

### Step 2: Create Render Service

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your repository
4. Configure the service:
   - **Name**: `mock-rest-api-server` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Select **Free** tier

### Step 3: Environment Variables (Optional)

If you need to customize the port, you can add:
- **Key**: `PORT`
- **Value**: `10000` (or any port Render assigns)

Render automatically sets the `PORT` environment variable, so no manual configuration is needed.

### Step 4: Deploy

1. Click **"Create Web Service"**
2. Render will automatically:
   - Install dependencies
   - Start your server
   - Provide a public URL (e.g., `https://your-app.onrender.com`)

### Step 5: Access Your API

Once deployed, your API will be available at:
```
https://your-app.onrender.com/api/products
https://your-app.onrender.com/api/products/1
https://your-app.onrender.com/api/auth/login
https://your-app.onrender.com/api/cart
```

## Customizing Responses

To modify API responses, simply edit the corresponding JSON files in `src/responses/`:

- Products list: `src/responses/products/list.json`
- Product details: `src/responses/products/detail.json`
- Login response: `src/responses/auth/login.json`
- Cart response: `src/responses/cart/get.json`

## Adding New Endpoints

1. Add a new route in `src/routes/routes.js`:
```javascript
router.get('/your-endpoint', (req, res) => {
  const filePath = path.join(responsesPath, 'your-folder', 'response.json');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error loading data',
        error: err.message
      });
    }
  });
});
```

2. Create the corresponding JSON file in `src/responses/your-folder/response.json`

3. Follow the standard response format with `success`, `message`, `data`, and `timestamp`

## Notes

- The server uses CORS middleware to allow cross-origin requests
- All routes are defined in a single file (`routes.js`) for easy maintenance
- No database is used - all responses come from static JSON files
- The server automatically uses `process.env.PORT` for Render compatibility

## License

MIT


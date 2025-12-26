# Apna Dukan Mock API Server

A comprehensive mock REST API server for the "Apna Dukan" e-commerce application, built with Node.js and Express.js. Designed to serve static JSON responses for frontend development and testing.

## 🚀 Features

- ✅ **Express.js** based REST API
- ✅ **Swagger UI** - Interactive API documentation and testing
- ✅ **CORS** enabled for browser and mobile apps
- ✅ **80+ API Endpoints** across 10 major domains
- ✅ **Zero Database** - Static JSON file responses
- ✅ Clean, domain-based folder organization
- ✅ Ready for Render/Heroku deployment

## 📖 API Documentation (Swagger UI)

The server includes interactive Swagger documentation where you can view all endpoints and test them directly from your browser.

**URL**: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

### How to use Swagger UI:
1. Start the server: `npm start`
2. Open `http://localhost:3000/api-docs` in your browser.
3. Explore the controllers (Payment, Auth, Inventory, etc.).
4. Click "Try it out" to send requests and see real mock responses.

## 📁 Project Structure

```
mock-server/
 ├── src/
 │   ├── app.js                   # Main application setup & Swagger config
 │   ├── routes/                  # Express route definitions
 │   └── responses/               # Static JSON mock responses
 ├── swagger.yaml                 # OpenAPI Specification
 ├── package.json                 # Dependencies & scripts
 └── README.md                    # Documentation
```

## 🛠️ Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

## 🧪 Testing Endpoints

You can also test endpoints using curl or Postman:

```bash
# Get payment history
curl http://localhost:3000/api/v1/payments/history

# Login with mobile (returns OTP ref)
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"mobileNumber":"9999999999"}'
```

## 📡 Available Domains

1. **Payment** (`/api/v1/payments`)
2. **Auth** (`/api/v1/auth`)
3. **Inventory** (`/api/v1/inventory`)
4. **Address** (`/api/v1/addresses`)
5. **Notification** (`/api/v1/notifications`)
6. **Coupon** (`/api/v1/coupons`)
7. **Review** (`/api/v1/reviews`)
8. **Admin** (`/api/v1/admin`)
9. **Analytics** (`/api/v1/analytics`)
10. **Operations** (`/api/v1/ops`)

## 📝 License
MIT

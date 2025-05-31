# 🔌 Charging Station Backend (Node.js + Express + PostgreSQL)

This is the backend for the Charging Station Management application. It provides a RESTful API built with Node.js and Express, connected to a PostgreSQL database. It supports user registration, login with JWT-based authentication, and full CRUD operations for managing charging stations.

## 🚀 Features

- RESTful API with Express
- PostgreSQL database using Sequelize ORM
- JWT-based authentication
- CRUD operations for charging stations
- Swagger documentation
- Postman collection available

## 📦 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT for authentication
- Swagger for API docs

## 📂 Project Structure

```
backend/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── config/
├── docs/
│   ├── swagger.yaml
│   └── postman_collection.json
├── .env
├── server.js
└── README.md
```

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/charging-station-app.git
cd charging-station-app/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
DATABASE_URL=postgres://user:password@localhost:5432/chargingdb
JWT_SECRET=your_jwt_secret
```

### 4. Setup PostgreSQL Database

Make sure PostgreSQL is running, then:

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

### 5. Start the Server

```bash
npm start
```

## 📬 API Endpoints

### 🔐 Auth

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive JWT token

### 🔌 Charging Stations (JWT Required)

- `GET /api/chargers` - List all chargers
- `POST /api/chargers` - Create new charger
- `PUT /api/chargers/:id` - Update charger
- `DELETE /api/chargers/:id` - Delete charger

## 📘 Documentation

- Swagger UI: `/api-docs`
- Postman Collection: [`docs/postman_collection.json`](./docs/postman_collection.json)

## 🌍 Deployment

You can deploy this backend to:
- Render
- Heroku
- Railway

Set your `DATABASE_URL` and `JWT_SECRET` in the deployment platform.

## 👤 Author

Made with ❤️ for the Full-Stack Node + Vue Assignment.
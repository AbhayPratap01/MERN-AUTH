# MERN Authentication System

A full-stack authentication application built using the **MERN Stack (MongoDB, Express.js, React, Node.js)** implementing secure JWT authentication with **Access Tokens** and **Refresh Tokens**.

This project was developed as part of a Full Stack MERN Internship technical assessment.

---

## Live Demo

**Frontend:** [https://mern-auth-theta-murex.vercel.app/]

**Backend API:** [https://mern-auth-2nco.onrender.com/]

---

## Preview

> Add screenshots of:
- Login Page
- Signup Page
- Dashboard

---

# Features

- User Registration
- User Login
- Secure Password Hashing (bcrypt)
- JWT Authentication
- Short-lived Access Token
- Long-lived Refresh Token
- HTTP-only Cookie Storage
- Protected Routes
- Auto Login after Refresh Token Validation
- Logout Functionality
- Responsive UI with Tailwind CSS

---

# Tech Stack

### Frontend

- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast
- Context API

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- Cookie Parser
- CORS
- dotenv

---

# Project Structure

```
MERN-AUTH/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

# Authentication Flow

```
Signup/Login
        │
        ▼
Backend validates credentials
        │
        ▼
Generate Access Token + Refresh Token
        │
        ├──────────────► Refresh Token stored in HTTP-only Cookie
        │
        ▼
Access Token returned to Frontend
        │
        ▼
Access Protected Routes
        │
        ▼
When Access Token expires
        │
        ▼
/auth/refresh
        │
        ▼
New Access Token Issued
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/MERN-AUTH.git

cd MERN-AUTH
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_secret

REFRESH_TOKEN_SECRET=your_refresh_secret

NODE_ENV=development

CLIENT_URL=http://localhost:5173
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend

```bash
npm run dev
```

---

# Deployment

### Frontend

- Vercel

### Backend

- Render

### Database

- MongoDB Atlas

---

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|----------|---------------------|----------------|
| POST | /api/auth/signup | Register User |
| POST | /api/auth/login | Login User |
| POST | /api/auth/refresh | Refresh Access Token |
| POST | /api/auth/logout | Logout |

---

## Protected

| Method | Endpoint | Description |
|----------|----------------------|----------------|
| GET | /api/user/dashboard | User Dashboard |

---

# Security Features

- Password hashing using bcrypt
- JWT Authentication
- HTTP-only Refresh Token Cookies
- Protected API Routes
- Environment Variables
- CORS Configuration

---

# Future Improvements

- Email Verification
- Forgot Password
- Role-Based Authentication
- User Profile Editing
- Dark Mode
- Axios Token Interceptors
- Loading Skeletons

---

# Author

**Abhay Pratap Singh**

---

# 📄 License

This project was developed for an internship technical assessment and is available for educational purposes.

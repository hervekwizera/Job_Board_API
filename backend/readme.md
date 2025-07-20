# 🧠 JobBoard API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** to support job board applications. This API allows users to post, update, delete, and search for jobs, while supporting user authentication and authorization for both employers and job seekers.

---

## 📌 Features

- User Authentication (Register/Login with JWT)
- Role-based Access (Employers vs. Job Seekers)
- Create, Read, Update, Delete (CRUD) for Jobs
- Search & Filter Jobs by title, location, category, etc.
- Pagination support
- Secure endpoints
- MongoDB with Mongoose ORM
- .env support for sensitive configs

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **bcrypt.js** for password hashing
- **dotenv**
- **Morgan** for logging
- **Helmet** for security

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or cloud e.g., MongoDB Atlas)
- Postman or any API testing tool

### Installation

1. Clone the repo:

```bash
git clone https://github.com/hervekwizera/Job_Board_API.git
cd jobboard-api

✅ Updated Folder Structure

jobboard-api/
├── src/
│   ├── config/               # Configuration files (e.g., DB, environment)
│   │   └── db.js
│   │
│   ├── controllers/          # Controller logic for each route
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   └── job.controller.js
│   │
│   ├── middleware/           # Express middleware (auth, error handling, etc.)
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── models/               # Mongoose models
│   │   ├── user.model.js
│   │   └── job.model.js
│   │
│   ├── routes/               # Express route definitions
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   └── job.routes.js
│   │
│   ├── utils/                # Utility/helper functions
│   │   ├── generateToken.js
│   │   └── logger.js
│   │
│   ├── validations/          # Input validations using Joi or express-validator
│   │   ├── auth.validation.js
│   │   └── job.validation.js
│   │
│   ├── app.js                # Initializes express, middleware, and routes
│   └── server.js             # Starts the server
│
├── .env                      # Environment variables
├── .gitignore
├── package.json
├── README.md
└── LICENSE

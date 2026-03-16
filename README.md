# TaskFlow - Task Management Application

A modern, full-stack task management application built with **React + Vite** (frontend) and **Node.js + Express** (backend). Manage your daily tasks efficiently with category-based organization, authentication, and real-time updates.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-ISC-green)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Author](#author)

---

## ✨ Features

- **User Authentication**: Secure JWT-based authentication with bcrypt password hashing
- **Task Management**: Create, read, update, and delete tasks with ease
- **Category Organization**: Filter tasks by categories (Work, Health, Family, Personal)
- **Task Status Tracking**: Toggle task status between pending and completed
- **Protected Routes**: Secure dashboard accessible only to authenticated users
- **Real-time Updates**: Instant task updates without page refresh
- **Responsive Design**: Mobile-friendly UI with modern aesthetics
- **Error Handling**: Comprehensive error handling on both frontend and backend
- **Input Validation**: Email and password validation for security

---

## 🛠️ Tech Stack

### Frontend

- **React** 19.2.0 - UI library
- **Vite** 7.3.1 - Build tool and dev server
- **React Router** 7.13.1 - Client-side routing
- **Axios** 1.13.6 - HTTP client
- **Lucide React** 0.577.0 - Icon library
- **Validator.js** 13.15.26 - Input validation
- **JWT Decode** 4.0.0 - JWT token decoding

### Backend

- **Node.js** - JavaScript runtime
- **Express** 5.2.1 - Web framework
- **MySQL2** 3.19.1 - Database driver
- **Bcrypt** 6.0.0 - Password hashing
- **JWT** 9.0.3 - Token generation and verification
- **Validator.js** 13.15.26 - Input validation
- **CORS** 2.8.6 - Cross-origin resource sharing
- **Dotenv** 17.3.1 - Environment variable management

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MySQL** (v5.7 or higher)
- **Git**

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd task-manager
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## ⚙️ Configuration

### Backend Setup

1. **Create Environment Variables File** (`.env`)

In `server/.env`, add the following:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=mytask_manager
JWT_SECRET=your_secret_key_here
CORS_ORIGIN=http://localhost:5173
```

2. **Setup Database**

Create a MySQL database:

```sql
CREATE DATABASE mytask_manager;
USE mytask_manager;

-- Users table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tasks table
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  status ENUM('pending','completed') DEFAULT 'pending',
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Frontend Setup

Create `client/.env` (optional for development):

```env
VITE_API_URL=http://localhost:3000/api
```

---

## ▶️ Running the Application

### Start the Backend Server

```bash
cd server
npm run dev    # Development mode with nodemon
# or
npm start      # Production mode
```

Server will run on: `http://localhost:3000`

### Start the Frontend Development Server

In a new terminal:

```bash
cd client
npm run dev
```

Frontend will run on: `http://localhost:5173`

### Build for Production

**Frontend:**

```bash
cd client
npm run build
# Output: client/dist/
```

**Backend:** runs directly from source, no build step needed.

---

## 📁 Project Structure

```
task-manager/
├── client/                          # React frontend
│   ├── public/                      # Static files
│   ├── src/
│   │   ├── components/              # Reusable React components
│   │   │   ├── AllTasks.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   ├── TaskInput.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── UserMenu.jsx
│   │   │   └── ...
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── NotFound.jsx
│   │   ├── api/                     # API service functions
│   │   │   ├── api.js              # Axios instance with interceptors
│   │   │   ├── loginService.js
│   │   │   ├── registerService.js
│   │   │   └── tasksService.js
│   │   ├── context/                 # React Context
│   │   │   └── AuthContext.jsx      # Authentication state
│   │   ├── styles/                  # CSS files
│   │   ├── utils/                   # Utility functions
│   │   │   └── checkToken.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── server/                          # Express backend
│   ├── config/
│   │   └── db.js                   # Database connection
│   ├── controllers/                 # Business logic
│   │   ├── loginController.js
│   │   ├── registerController.js
│   │   └── tasksController.js
│   ├── routes/                      # API routes
│   │   ├── login.js
│   │   ├── register.js
│   │   └── tasks.js
│   ├── middleware/
│   │   └── authenticateToken.js    # JWT verification
│   ├── server.js                    # Express app entry point
│   └── package.json
│
└── README.md                        # This file
```

---

## 🔌 API Endpoints

### Authentication Routes

#### Register User

```http
POST /api/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**

```json
{
  "message": "Account created successfully"
}
```

#### Login User

```http
POST /api/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "message": "Login Successful",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Task Routes (All require JWT authentication)

#### Get All Tasks

```http
GET /api/tasks
Authorization: Bearer <token>
```

**Response:**

```json
{
  "results": [
    {
      "id": 1,
      "title": "Work",
      "description": "Complete project",
      "status": "pending"
    }
  ]
}
```

#### Add New Task

```http
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Work",
  "description": "Complete project documentation"
}
```

**Response:**

```json
{
  "message": "Task added successfully"
}
```

#### Update Task Status

```http
PATCH /api/tasks/:id
Authorization: Bearer <token>
```

**Response:**

```json
{
  "message": "Task updated successfully"
}
```

#### Delete Task

```http
DELETE /api/tasks/:id
Authorization: Bearer <token>
```

**Response:**

```json
{
  "message": "Task deleted successfully"
}
```

---

## 💻 Usage

### 1. Register a New Account

- Navigate to `http://localhost:5173/register`
- Fill in name, email, and password (password must be > 8 characters)
- Click "Create Account"

### 2. Login

- Navigate to `http://localhost:5173/login`
- Enter your email and password
- Click "Sign In"

### 3. Manage Tasks

- View all tasks on the dashboard
- Filter by category (All, Work, Health, Family, Personal)
- Add new tasks using the input form
- Click the circle icon to mark tasks as complete
- Click the trash icon to delete tasks

### 4. Logout

- Click on the user menu (top right)
- Select logout

---

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend:

```bash
cd client
npm run build
```

2. Deploy the `client/dist/` folder to Vercel or Netlify

### Backend Deployment (Railway/Render/Heroku)

1. Set environment variables in your hosting platform
2. Push to your Git repository
3. Connect your repository to the hosting platform
4. Ensure `start` script is in `package.json`:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## 🔐 Security Considerations

- JWT tokens expire after 24 hours
- Passwords are hashed using bcrypt with 10 salt rounds
- All API endpoints validate input data
- CORS is configured to accept requests only from allowed origins
- SQL injection is prevented using parameterized queries
- Sensitive data (.env files) are not committed to version control

---

## 📝 Environment Variables Reference

### Server (.env)

| Variable    | Description        | Example               |
| ----------- | ------------------ | --------------------- |
| PORT        | Server port        | 3000                  |
| DB_HOST     | Database host      | localhost             |
| DB_USER     | Database user      | root                  |
| DB_PASSWORD | Database password  | password123           |
| DB_NAME     | Database name      | mytask_manager        |
| JWT_SECRET  | JWT signing secret | your_secret_key       |
| CORS_ORIGIN | Allowed origin     | http://localhost:5173 |

### Client (.env)

| Variable     | Description  | Example                   |
| ------------ | ------------ | ------------------------- |
| VITE_API_URL | API base URL | http://localhost:3000/api |

---

## 🐛 Troubleshooting

### Database Connection Error

- Ensure MySQL is running
- Check database credentials in `.env`
- Verify database and tables are created

### CORS Error

- Update `CORS_ORIGIN` in `.env` to match your frontend URL
- Ensure frontend is running on the correct port

### Token Expired Error

- Login again to get a new token
- Check browser console for authentication errors

### Build Errors

- Delete `node_modules` folder
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

---

## 📄 License

This project is licensed under the ISC License - see the `LICENSE` file for details.

---

## 👤 Author

**Tsinukal Tefera**

- GitHub: [@tsina-tefe](https://github.com/tsina-tefe)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the author.

---

**Last Updated:** March 16, 2026  
**Version:** 1.0.0

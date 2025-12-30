# Secure Authentication System – Backend Project

A backend authentication and authorization service built using Node.js, Express, and MongoDB.  
This project focuses on implementing real-world authentication logic with clean architecture and reusable design.

This authentication system is designed as an independent backend service and has been integrated into a Real-Time Chat Application.

---

## Features

- User registration and login
- JWT-based authentication and authorization
- Secure password hashing using bcrypt
- Protected routes using middleware
- Modular backend architecture (routes, controllers, middleware)
- File and image upload support using Cloudinary
- Environment-based configuration using dotenv
- Reusable backend service for multiple applications

---

## Tech Stack

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB
- Mongoose

**Authentication & Security**
- JSON Web Tokens (JWT)
- bcrypt

**File Storage**
- Cloudinary
- Local storage (fallback)

**Tools**
- Git
- GitHub
- Postman
- Render (Deployment)

---

## Project Structure

src/
├── controllers/
├── models/
├── routes/
├── middleware/
├── database/
├── utils/
├── server.js

This structure helps in maintaining clean separation of concerns and makes the backend scalable and easy to maintain.

---

## API Endpoints

| Method | Endpoint           | Description              |
|------|--------------------|--------------------------|
| POST | /api/auth/register | Register a new user      |
| POST | /api/auth/login    | Login an existing user   |
| GET  | /api/auth/profile  | Get authenticated user   |
| POST | /api/upload        | Upload image or file     |

Protected routes require a valid JWT token.

---

## Live Deployment

Live API Link:  
Deploying it 

Opening the link in a browser returns a JSON response indicating that the backend service is running.

---

## Testing

- All APIs tested using Postman
- Authentication flow tested end-to-end
- JWT protection verified on secured routes

---

## Reusability and Integration

This authentication system is built as a reusable backend service and has been integrated into a Real-Time Chat Application to handle user authentication and authorization.

It can be easily connected with:
- React / Next.js frontends
- Mobile applications
- Other backend services

---

## Future Enhancements

- Refresh token implementation
- Role-based access control (RBAC)
- API rate limiting
- Redis integration

---

## Author

Harshit Dhiman  
GitHub: https://github.com/HarshitDhiman96

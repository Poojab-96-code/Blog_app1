# Blog_app1

Project Structure & Approach
Step 1: Plan & Design
Outlined features (Authentication, CRUD posts, etc.)

Designed the database schema (users & posts tables with foreign key relationship)

Decided on separate folders for frontend and backend

Step 2: Backend Development (/blog-backend)
Set up Node.js server using Express

Created MySQL database with users and posts tables

Used mysql2 package for DB operations

Added RESTful API endpoints:

/api/auth/register, /api/auth/login, /api/posts (GET, POST), /api/posts/:id (PUT, DELETE)

Middleware for authentication using JWT

Step 3: Frontend Development (/blog-frontend)
Bootstrapped with create-react-app

Created pages: Home, Login, Signup, Dashboard, NewPost

Used React Router DOM for navigation

Managed user authentication with localStorage

Integrated CKEditor for rich text blog editing

Fetched data from backend using Axios

🔹 Step 4: Testing with Postman
Used Postman to test backend API endpoints (register, login, create/read/update/delete post)

🔹 Step 5: Final Integration
Connected frontend to backend APIs

Handled user token and secure routes

Added UI improvements using Bootstrap

 Authentication
User passwords are hashed before saving

JWT tokens used for route protection

Protected routes like /dashboard and create post for authenticated users only

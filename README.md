# C2C Shopping App

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Features](#features)
- [Output](#output)
- [Technologies Used](#technologies-used)
- [Scripts](#scripts)
- [Contribution](#contribution)
- [License](#license)

## Overview

C2C Shopping App is a full-stack application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and follows the MVC (Model-View-Controller) architecture for the backend. The application provides a user-friendly interface for managing products, allowing users to view, edit, and delete products.

## Installation

### Backend (Node.js Server)

1. Install dependencies:
   ```npm install```
2. Create a .env file in the backend directory and add the necessary environment variables:
   ```
   MONGODB_URI=your_mongodb_uri
   PORT=your_preferred_port
   ```
3. Run the server:
   ```
   npm run dev
   ```
   
### Frontend (React.js App)

1. Install dependencies:
   ```npm install```
2. Run the development server:
   ```npm run dev```
3. Set your frontend url in the backend env file with variable name as 'FRONTEND':
   ```FRONTEND:<YOUR URL>```


## Features

### Product Management: 
View a list of products with details such as product image, name, quantity, and price.
### CRUD Operations: 
Easily edit or delete products with the provided buttons on each product card.
### Responsive Design: 
The application is designed to be responsive, providing a seamless experience on different devices.

## Output:

### Home Page
![Home page](https://github.com/therealaaryan/C2C-Shopping-App/assets/51379599/ee5f375c-4e4a-483a-add7-272421e56155)

### Create Page
![create page](https://github.com/therealaaryan/C2C-Shopping-App/assets/51379599/0cb4205c-b0a5-44e6-a864-b86d7b5d7a4c)

### Edit Page
![edit page](https://github.com/therealaaryan/C2C-Shopping-App/assets/51379599/571e4f3f-6b58-430f-83de-d5881071a20b)

### Delete pop-up
![delete button](https://github.com/therealaaryan/C2C-Shopping-App/assets/51379599/006aa3ac-e02f-445e-ad32-e43dda771bfd)





## Technologies Used

### Backend:

1. Express.js: Web application framework for Node.js.
2. MongoDB: NoSQL database for storing product data.
3. Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
4. dotenv: Environment variable management.
5. cors: Enable Cross-Origin Resource Sharing.

### Frontend:

1. React.js: JavaScript library for building user interfaces.
2. React Router: Declarative routing for React.js.
3. axios: HTTP client for making requests to the backend.
4. react-toastify: Notifications for user interactions.
5. sweetalert2: Beautiful, responsive, customizable pop-up modals.

## Scripts

### Backend:

1. npm run serve: Start the server using node server.js.
2. npm run dev: Start the server using nodemon for development.

### Frontend:

1. npm run dev: Start the development server using Vite.
2. npm run build: Build the production-ready application.
3. npm run lint: Lint the code using ESLint.

## Contribution:

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.

## License:

This project is licensed under the ISC License.


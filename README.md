# 🩸 Blood Donor Search Web App

A full-stack web application designed to connect blood donors with people in need. The app allows users to register as donors, search for available donors by blood group and location.

## ✨ Features

  * **Donor Registration**: Securely register new donors with details like name, blood group, and contact information.
  * **User Authentication**: Robust login/logout functionality with a JWT-based authentication system.
  * **Donor Search**: Search for donors based on specific criteria like blood group and city.
  * **Modern UI**: Clean and attractive user interface using a pure CSS design.
  * **RESTful API**: A well-structured backend API built with Node.js and Express.js.

## 🛠️ Technologies Used

### Frontend (Client)

  * **React.js**: A JavaScript library for building user interfaces.
  * **React Router DOM**: For handling client-side routing.
  * **Axios**: For making API requests to the backend.
  * **Pure CSS**: For modern and clean styling.

### Backend (Server)

  * **Node.js & Express.js**: A back-end runtime environment and web framework.
  * **MongoDB**: A NoSQL database for storing application data.
  * **Mongoose**: An object data modeling (ODM) library for MongoDB and Node.js.
  * **Bcrypt.js**: For secure password hashing.

<img width="1841" height="826" alt="Screenshot 2025-09-04 151403" src="https://github.com/user-attachments/assets/03c45c98-ad69-491a-8e16-6a62d9771fbf" />


## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

You must have **Node.js** and **npm** installed.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/blood-donor-app.git
    cd blood-donor-app
    ```

2.  **Install dependencies for the frontend:**

    ```bash
    npm install
    ```

3.  **Install dependencies for the backend:**

    ```bash
    cd backend
    npm install
    ```

4.  **Set up the environment variables:**
    Create a `.env` file in the `backend` folder and add your database connection string and other environment-specific variables.

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

### Running the App

1.  **Start the backend server:**

    ```bash
    # In the backend directory
    npm run dev
    ```

2.  **Start the frontend development server:**

    ```bash
    # In the project root directory
    npm run dev
    ```

The app should now be running on `http://localhost:5173` (or the port specified by Vite).

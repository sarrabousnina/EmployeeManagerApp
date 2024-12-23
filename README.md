# Employee Manager App

## Overview
The **Employee Manager App** is a full-stack application designed to manage employee data efficiently. The project consists of two main components:

1. **Frontend**: Built with Angular, providing an intuitive user interface for managing employees.
2. **Backend**: Developed with Spring Boot, handling the business logic and interactions with the database.

---

## Features
- Add, edit, and delete employees.
- View a list of all employees with detailed information.
- Search employees by name, email, phone, or job title.
- Upload employee profile images.

---

## Technologies Used

### Frontend
- **Framework**: Angular
- **Styling**: Bootstrap, CSS
- **Package Manager**: npm

### Backend
- **Framework**: Spring Boot
- **Database**: MongoDB
- **Build Tool**: Maven

---

## Prerequisites

### General
- Git
- Node.js and npm (for the frontend)
- Java JDK 11 or later (for the backend)
- MongoDB server

---

## Setup Instructions

### Clone the Repository
```bash
git clone https://github.com/sarrabousnina/EmployeeManagerApp.git
cd EmployeeManagerApp
```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
   Access the application at `http://localhost:4200`.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Configure the database connection in `application.properties`:
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/employeemanager
   ```
3. Build and run the backend:
   ```bash
   mvn spring-boot:run
   ```
   The backend will start at `http://localhost:8080`.

---

## Usage
1. Open the frontend application in a browser at `http://localhost:4200`.
2. Use the interface to manage employees.
3. The backend API will handle data storage and retrieval.


---


## Contact
For any questions or issues, please contact:
- **Name**: Sarra Bousnina
- **GitHub**: [sarrabousnina](https://github.com/sarrabousnina)

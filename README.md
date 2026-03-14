# WestCoast Education – Course Booking Application
Course assignment project developed using Vanilla JavaScript, JSON Server and TypeScript.

This project is a web application for **WestCoast Education**, where users can browse courses, view course details, and book courses online.

The application is built using **Vanilla JavaScript**, **ES6 Modules**, and **JSON Server** as a REST API.

The project was developed as part of a web development course assignment.

---

# Features

## Public Users
Users can:

- View all available courses
- View detailed information about a course
- Register a new account
- Log in to the system
- Book a course
- View their own bookings

---

## Admin
Admin users can:

- Add new courses
- Delete courses
- View all bookings

---

# Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6 Modules)
- JSON Server (REST API)
- LocalStorage for authentication
- TypeScript (VG requirement)
- Jest for testing (TDD)

---

# Project Structure
westcoast-education
│
├── css
│ └── style.css
│
├── js
│ ├── admin.js
│ ├── api.js
│ ├── auth.js
│ ├── booking.js
│ ├── login.js
│ ├── main.js
│ ├── myBookings.js
│ └── signup.js
│
├── ts
│ ├── booking.ts
│ └── booking.test.ts
│
├── images
│
├── db.json
├── package.json
├── jest.config.js
├── index.html
├── login.html
├── signup.html
├── booking.html
├── courseDetails.html
├── myBookings.html
├── admin.html
│
└── README.md


---

# Installation

Clone the repository or download the project.

Then install dependencies:
npm install


---

# Running the API

Start the JSON Server:
npm run start


The API will run on:
http://localhost:3000


Available endpoints:

/courses
/users
/bookings


---

# Running Tests 

This project includes a **TypeScript module tested with Jest using TDD principles**.

Run tests using:
npm test


Example test output:
PASS ts/booking.test.ts
✓ calculate booking price


---

# Example Users

Example users available in the database:
Email: kalle@westcoast.se
Password: 123456

Email: lisa@westcoast.se
Password: 654321


---

# Course Booking Flow

1. User registers or logs in
2. User selects a course
3. User fills in booking information
4. Booking is stored in the JSON Server database
5. User can view bookings on **My Bookings**

---

# Principles Used

The project follows these development principles:

### DRY – Don't Repeat Yourself
API requests are centralized in:
api.js


### KISS – Keep It Simple Stupid
The application uses simple, readable JavaScript without unnecessary complexity.

---

# VTypscript

To do better project I included this:

- A **TypeScript module**
- **Unit testing with Jest**
- Development following **Test Driven Development (TDD)** principles.

Example module:
ts/booking.ts


Example test:
ts/booking.test.ts


---

# Author

Najma Hasan  project developed for educational purposes.

WestCoast Education.

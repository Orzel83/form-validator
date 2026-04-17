# Form Validator

## Description

This project is a simple form validation application built using HTML, CSS and JavaScript.  
It demonstrates the use of Test Driven Development (TDD) and unit testing with Jest.

The application allows users to enter an email, password and confirm password, and validates the input based on defined rules.

---

## Features

- Email validation (format check)
- Password length validation (minimum 6 characters)
- Password match validation
- Empty input validation
- Clear error messages for users
- Success message when form is valid

---

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)
- Jest (for unit testing)

---

## How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/Orzel83/form-validator.git

2. Navigate to the project folder:
cd form-validator
3. Open index.html in your browser

How to Run Tests

Install dependencies:

npm install

Run tests:

npm test


Test Driven Development (TDD)

This project was developed using a Test Driven Development approach.

For each feature:

Tests were written first
Code was implemented to pass the tests
Code was reviewed and improved if needed

This approach ensured that all validation logic is tested and reliable.

Validation Logic

The application includes the following validation functions:

isNotEmpty() – checks if input is not empty
isValidEmail() – checks if email format is correct
isPasswordLongEnough() – ensures password has at least 6 characters
doPasswordsMatch() – checks if passwords match

Accessibility and Usability
All inputs include labels for better accessibility
Error messages are clearly displayed below each field
The interface is simple and easy to use
The form provides immediate feedback to the user

Project Structure
form-validator/
│
├── index.html
├── style.css
├── script.js
├── validation.js
├── validation.test.js
├── package.json
└── README.md

Author

Created as part of Advanced Software Engineering module.
Marcin Reszka (GitHub ID: Orzel83)
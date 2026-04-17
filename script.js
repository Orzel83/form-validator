// get form element from HTML
const form = document.getElementById('signup-form');

// get input fields
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// get places where error messages will be shown
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

// get place for success message
const successMessage = document.getElementById('success-message');

// function checks if input is not empty
function isNotEmpty(value) {
  // remove spaces and check if something is left
  return value.trim() !== '';
}

// function checks if email format is correct
function isValidEmail(email) {
  // simple pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // return true if email matches the pattern
  return emailPattern.test(email);
}

// function checks if password has enough characters
function isPasswordLongEnough(password) {
  // return true if password length is at least 6
  return password.length >= 6;
}

// function checks if both passwords are the same
function doPasswordsMatch(password, confirmPassword) {
  // compare password and confirm password
  return password === confirmPassword;
}

// function clears old messages before new validation
function clearMessages() {
  // remove all old error messages
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  // remove old success message
  successMessage.textContent = '';
}

// listen for form submit
form.addEventListener('submit', function (event) {
  // stop form from refreshing the page
  event.preventDefault();

  // clear old messages first
  clearMessages();

  // get values from inputs
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // variable to track if form is valid
  let isFormValid = true;

  // check if email is empty
  if (!isNotEmpty(email)) {
    // show email error
    emailError.textContent = 'Email is required';
    isFormValid = false;
  } else if (!isValidEmail(email)) {
    // show invalid email error
    emailError.textContent = 'Please enter a valid email address';
    isFormValid = false;
  }

  // check if password is empty
  if (!isNotEmpty(password)) {
    // show password error
    passwordError.textContent = 'Password is required';
    isFormValid = false;
  } else if (!isPasswordLongEnough(password)) {
    // show password length error
    passwordError.textContent = 'Password must be at least 6 characters long';
    isFormValid = false;
  }

  // check if confirm password is empty
  if (!isNotEmpty(confirmPassword)) {
    // show confirm password error
    confirmPasswordError.textContent = 'Please confirm your password';
    isFormValid = false;
  } else if (!doPasswordsMatch(password, confirmPassword)) {
    // show password mismatch error
    confirmPasswordError.textContent = 'Passwords do not match';
    isFormValid = false;
  }

  // if all checks pass, show success message
  if (isFormValid) {
    successMessage.textContent = 'Form submitted successfully';
  }
});
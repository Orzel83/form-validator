// function checks if input is not empty
function isNotEmpty(value) {
  // remove spaces from beginning and end
  // example: "  text  " -> "text"
  const trimmedValue = value.trim();

  // check if string is not empty after trimming
  return trimmedValue !== '';
}
// function checks if email is valid
function isValidEmail(email) {
  // simple regex pattern for email validation
  // checks if email has text + @ + text + . + text
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // test email against regex and return result (true or false)
  return emailPattern.test(email);
}
// function checks if password has at least 6 characters
function isPasswordLongEnough(password) {
  // check length of password
  return password.length >= 6;
}

// function checks if two passwords match
function doPasswordsMatch(password, confirmPassword) {
  // compare both values
  return password === confirmPassword;
}

// export functions so they can be used in tests
module.exports = { isNotEmpty, isValidEmail, isPasswordLongEnough, doPasswordsMatch };
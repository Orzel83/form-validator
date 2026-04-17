// import function from validation.js
const { isNotEmpty } = require('./validation');

// test: should return true for normal text
test('returns true when the input is not empty', () => {
  // call function with normal string
  expect(isNotEmpty('hello')).toBe(true);
});

// test: should return false for empty string
test('returns false when the input is an empty string', () => {
  // empty string should fail
  expect(isNotEmpty('')).toBe(false);
});

// test: should return false for spaces only
test('returns false when the input contains only spaces', () => {
  // spaces are treated as empty
  expect(isNotEmpty('   ')).toBe(false);
});
// import new function (add it to existing import later)
const { isValidEmail } = require('./validation');

// test: valid email should pass
test('returns true for a valid email', () => {
  expect(isValidEmail('test@test.com')).toBe(true);
});

// test: missing @ should fail
test('returns false for email without @ symbol', () => {
  expect(isValidEmail('testtest.com')).toBe(false);
});

// test: missing domain should fail
test('returns false for email without domain', () => {
  expect(isValidEmail('test@')).toBe(false);
});

// test: empty string should fail
test('returns false for empty email', () => {
  expect(isValidEmail('')).toBe(false);
});
// import new functions (update existing import)
const { isPasswordLongEnough, doPasswordsMatch } = require('./validation');

// test: password long enough
test('returns true when password has at least 6 characters', () => {
  expect(isPasswordLongEnough('123456')).toBe(true);
});

// test: password too short
test('returns false when password is shorter than 6 characters', () => {
  expect(isPasswordLongEnough('123')).toBe(false);
});

// test: empty password
test('returns false when password is empty', () => {
  expect(isPasswordLongEnough('')).toBe(false);
});

// test: matching passwords
test('returns true when passwords match', () => {
  expect(doPasswordsMatch('abc123', 'abc123')).toBe(true);
});

// test: different passwords
test('returns false when passwords do not match', () => {
  expect(doPasswordsMatch('abc123', 'abc321')).toBe(false);
});
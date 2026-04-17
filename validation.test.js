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
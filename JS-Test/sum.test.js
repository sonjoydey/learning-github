const sum = require('./sum');

test('Result for 1+2', () => {
  expect(sum(1, 2)).toBe(4);
});

test('Result for 5+2', () => {
  expect(sum(5, 2)).toBe(7);
});

test('Result for 3+2', () => {
  expect(sum(3, 2)).toBe(7);
});
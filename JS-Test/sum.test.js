const sum = require('./sum');
const sub = require('./sum2');

test('Result', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Result', () => {
  expect(sum(5, 2)).toBe(7);
});

test('Result', () => {
  expect(sum(3, 2)).toBe(5);
});

test('Result', () => {
  expect(sub(25, 2)).toBe(23);
});
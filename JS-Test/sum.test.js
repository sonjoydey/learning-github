const sum = require('./sum');

test('all js tests', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(5, 2)).toBe(7);
  expect(sum(3, 2)).toBe(5);

  function callback(data) {
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});


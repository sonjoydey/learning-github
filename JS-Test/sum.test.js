const sum = require('./sum');

test('all js tests', () => {
/*  expect(sum(1, 2)).toBe(3);
  expect(sum(5, 2)).toBe(7);
  expect(sum(3, 2)).toBe(5);*/

  function test1() {
    expect(sum(1, 2)).toBe(3);
  }

  function test2() {
    expect(sum(5, 2)).toBe(7);
  }

  function test3() {
    expect(sum(3, 2)).toBe(5);
  }

  fetchData(test1);
  fetchData(test2);
  fetchData(test3);
});


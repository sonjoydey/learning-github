const sum = require('./sum');
const sub = require('./sum2');

describe('File -1', () => {

	test('Result for 1+2', () => {
	  expect(sum(1, 2)).toBe(3);
	});

	test('Result for 5+2', () => {
	  expect(sum(5, 2)).toBe(7);
	});

	test('Result for 3+2', () => {
	  expect(sum(3, 2)).toBe(5);
	});

	test('Result for 25-2', () => {
	  expect(sub(25, 2)).toBe(23);
	});

});

const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
import calculator from './calculator';

test('adds, substracts, multiplies', () => {
  expect(calculator.add(2, 4)).toBe(6);
  expect(calculator.subtract(4,2)).toBe(2);
  expect(calculator.divide(4,2)).toBe(2);
  expect(calculator.divide(4,2)).toBe(2);
  expect(calculator.multiply(4,2)).toBe(8);
});


import analyze from './arrayAnalysis';

test('Analyze the Max Value in array', () => {
  expect(analyze([1, 5, 6]).max).toBe(6);
});

test('object assignment', () => {
  const data = analyze([1, 5, 6]);
  expect(data).toEqual({
    average: 4, min: 1, max: 6, length: 3,
  });
});

test('Analyze the Min Value in array', () => {
  expect(analyze([1, 5, 6]).min).toBe(1);
});

test('Analyze the length of array', () => {
  expect(analyze([1, 5, 6]).length).toBe(3);
});

test('Analyze the average of array', () => {
  expect(analyze([1, 5, 6]).average).toBe(4);
});

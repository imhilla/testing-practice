import shift from './cipher';

test('shifts one letter', () => {
  expect(shift('a', 1)).toBe('b');
});
import shift from './cipher';

test('shifts one letter', () => {
  expect(shift('z', 3)).toBe('c');
});
import capitalize from './capitalize';

test('makes first letter uppercase', () => {
  expect(capitalize('microverse')).toBe('Microverse');
});
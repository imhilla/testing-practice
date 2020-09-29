import shift from './shift';
import cipher from './cipher';

test('shifts one letter', () => {
  expect(shift('z', 3)).toBe('c');
});

test('ciphers strings', () => {
  expect(cipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
  expect(cipher('abcde', 5)).toBe('fghij');

});
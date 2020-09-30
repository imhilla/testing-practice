import shift from './shift';
import cipher from './cipher';

test('shifts one letter', () => {
  expect(shift('z', 3)).toBe('c');
});

test('ciphers strings', () => {
  expect(cipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
  expect(cipher('abcde', 5)).toBe('fghij');
});

test('keeps the same case regardless of input', () => {
  expect(cipher('abcDefghiJklmnOpqrstUvwxyz', 1)).toBe('bcdEfghijKlmnoPqrstuVwxyza');
});

test('should throw an error', () => {
  expect(cipher('wffeg.g', 3)).toBeTruthy();
});
import regTest from './regtest';

test('returns true if regex is seen', () => {
  expect(regTest('zkdg>/')).toBeTruthy();
});
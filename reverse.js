const reverseString = (string) => {
  const splitted = string.split('');
  const reversed = splitted.reverse();
  const joined = reversed.join('');
  return joined;
};

export default reverseString;
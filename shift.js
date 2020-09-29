const alpahbetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const shift = (string, key) => {
  const indexOfString = alpahbetArray.indexOf(string);
  let newString;
  let newIndex = indexOfString + key;
  if (newIndex > 25 && newIndex < 52) {
    newIndex = (newIndex - 25) - 1;
    newString = alpahbetArray[newIndex];
    return newString;
  }
  newIndex = indexOfString + key;
  newString = alpahbetArray[newIndex];
  return newString;
};

export default shift;
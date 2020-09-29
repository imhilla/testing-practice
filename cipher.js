const alpahbet_array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const shift = (string, key) => {
  const indexOfString = alpahbet_array.indexOf(string);
  let newString
  let newIndex = indexOfString + key
  if (newIndex > 25 && newIndex < 52) {
    newIndex = newIndex - 25
    newString = alpahbet_array[newIndex];
    return newString
  } else {
    newIndex = indexOfString + key
    newString = alpahbet_array[newIndex];
    return newString
  }
}

export default shift;

//efgfoe uif fbtu xbmm pg uif dbtumf
//defend the east wall of the castle
import shift from './shift';

const cipher = (string, key) => {
  let stripped = string.split("");
  let empty = []
  for (let i = 0; i < stripped.length; i++) {
    empty.push(shift(stripped[i], key))
    empty
  }
  let myArr = empty
  myArr = [myArr.join('')]
  var finalString = myArr.toString()
  return finalString
}

export default cipher;

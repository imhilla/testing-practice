import shift from './shift';

const regTest = (string) => {
  var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  return regex.test(string)
}

const cipher = (string, key) => {
  if ((regTest(string)) === true) {
    return true
  } else {
    string = string.toLowerCase()
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
}

export default cipher;

import shift from './shift';
import regTest from './regtest';

const isLowerCase = (stringI) => {
  return (/[a-z]/.test(stringI));
}

const cipher = (string, key) => {
  if ((regTest(string)) === true) {
    return true;
  }
  const stripped = string.split('');
  const empty = [];
  for (let i = 0; i < stripped.length; i += 1) {
    if (isLowerCase(stripped[i]) === true) {
      empty.push(shift(stripped[i], key));
    } else {
      const newI = stripped[i].toLowerCase()
      let shifted = shift(newI, key);
      var newS = shifted.toUpperCase();
      empty.push(newS);
    }
  }
  let myArr = empty;
  myArr = [myArr.join('')];
  const finalString = myArr.toString();
  return finalString;
};

export default cipher;

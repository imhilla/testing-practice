import shift from './shift';
import regTest from './regtest';

const cipher = (string, key) => {
  if ((regTest(string)) === true) {
    return true;
  }
  string = string.toLowerCase();
  const stripped = string.split('');
  const empty = [];
  for (let i = 0; i < stripped.length; i += 1) {
    empty.push(shift(stripped[i], key));
  }
  let myArr = empty;
  myArr = [myArr.join('')];
  const finalString = myArr.toString();
  return finalString;
};

export default cipher;

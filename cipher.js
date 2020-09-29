import shift from './shift';

const regTest = (string) => {
  const regex = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>?]/g;
  return regex.test(string);
};

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

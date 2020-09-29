const reverseString = (string) => { 
  let splitted = string.split('');
  let reversed = splitted.reverse()
  let joined = reversed.join('')
  return joined
}

export default reverseString;
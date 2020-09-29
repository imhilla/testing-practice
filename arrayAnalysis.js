let averagefunction = (arrayValue) => {
  let total = 0;
  arrayValue.forEach((value) => {
    total += value;
  });
  return total/arrayValue.length;
};

function analyze(arrayValue){
  let maxValue = Math.max(...arrayValue);
  let minValue = Math.min(...arrayValue);
  let arrayLength = arrayValue.length;
  let averageValue = averagefunction(arrayValue);
  return {average: averageValue, min: minValue, max: maxValue, length: arrayLength};
};
const object = analyze([1, 5, 6]);
console.log(object);
export default analyze;
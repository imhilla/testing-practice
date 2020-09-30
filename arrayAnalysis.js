const averagefunction = (arrayValue) => {
  let total = 0;
  arrayValue.forEach((value) => {
    total += value;
  });
  return total / arrayValue.length;
};

function analyze(arrayValue) {
  const maxValue = Math.max(...arrayValue);
  const minValue = Math.min(...arrayValue);
  const arrayLength = arrayValue.length;
  const averageValue = averagefunction(arrayValue);
  return {
    average: averageValue, min: minValue, max: maxValue, length: arrayLength,
  };
}
export default analyze;
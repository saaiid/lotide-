// ACTUAL FUNCTION
const middle = function(array) {
  let middleElements = [];
  if (array.length <= 2) {
  return middleElements;
  } else if (array.length % 2 === 0) {
  middleElements.push(array[array.length / 2 - 1]);
  middleElements.push(array[array.length / 2]);
  } else {
  middleElements.push(array[Math.floor(array.length / 2)]);
  }
  return middleElements;
  }
  
module.exports = middle;


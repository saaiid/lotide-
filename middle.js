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
  
  // Test 1: Array with one element
 console.log(middle([1]), []);
  
  // Test 2: Array with two elements
 console.log(middle([1, 2]), []);
  
  // Test 3: Array with odd number of elements
 console.log(middle([1, 2, 3]), [2]);
 console.log(middle([1, 2, 3, 4, 5]), [3]);
  
  // Test 4: Array with even number of elements
 console.log(middle([1, 2, 3, 4]), [2, 3]);
 console.log(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  
  // Test 5: Check for empty array
 console.log(middle([]), []);
  
  // Test 6: Check for array with negative numbers
 console.log(middle([-1, -2, -3, -4, -5]), [-3]);
  
  // Test 7: Check for array with decimal numbers
 console.log(middle([1.5, 2.5, 3.5, 4.5]), [2.5, 3.5]);
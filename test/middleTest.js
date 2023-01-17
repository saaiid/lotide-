const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

  // Test 1: Array with one element
  assertArraysEqual(middle([1]), []);
  
  // Test 2: Array with two elements
 assertArraysEqual(middle([1, 2]), []);
  
  // Test 3: Array with odd number of elements
 assertArraysEqual(middle([1, 2, 3]), [2]);
 assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
  
  // Test 4: Array with even number of elements
 assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
 assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  
  // Test 5: Check for empty array
 assertArraysEqual(middle([]), []);
  
  // Test 6: Check for array with negative numbers
 assertArraysEqual(middle([-1, -2, -3, -4, -5]), [-3]);
  
  // Test 7: Check for array with decimal numbers
 assertArraysEqual(middle([1.5, 2.5, 3.5, 4.5]), [2.5, 3.5]);
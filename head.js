const assertEqual = require('./assertEqual');

// TEST CODE
const head = function(arr) {
  return arr[0];
};

//const sum = (a, b) => a + b
//TEST CASES
//assertEqual((head([5,6,7]), 5));
//assertEqual((head(["Hello", "Lighthouse", "Labs"]), "Hello"));

module.exports = head;
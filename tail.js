const assertEqual = require('./assertEqual');

// TEST CODE
const tail = function(arr) {
  return arr.slice(1);
};

//TEST CASES
assertEqual(tail([5,6,7]), [6,7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
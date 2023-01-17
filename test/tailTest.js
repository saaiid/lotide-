const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

//TEST CASES
assertArraysEqual(tail([5,6,7]), [6,7]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

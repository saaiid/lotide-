const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
  console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  };
  
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject= { size: "medium", color: "red" };
  assertObjectsEqual(shirtObject , anotherShirtObject);
  
  const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
  assertObjectsEqual(shirtObject , longSleeveShirtObject);
  
  // Call the function to check the output
  assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
  assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2, c: 3});
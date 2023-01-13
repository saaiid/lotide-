const eqObjects = function(obj1, obj2) {
  let obj1keys = Object.keys(obj1);
  let obj2keys = Object.keys(obj2);
  if (obj1keys.length !== obj2keys.length) return false;
  for (let key of obj1keys) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // should return true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // should return false

//it will print frint letter of each word
/* const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
const results = [];
for (let item of array) {
results.push(callback(item));
}
return results;
}

console.log(map(words, word => word[0])); */


//it will print howwas the function before(full word) and what happend after(first letter of each word)
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return [];
}
console.log(map(words, word => word[0]));





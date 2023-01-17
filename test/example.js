const hello = function(name) {
  return `Hello, ${name}`;
};


module.exports = {a: function(val){
  console.log('inside a', 'val is', val)
}, b: 'Hello World', greeting: hello};
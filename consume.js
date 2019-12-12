//Map

let myMap = new Map(); 

let keyString = 'a string', keyObj = {}, keyFunc = function() {};

// setting the values 
myMap.set(keyString, "value associated with 'a string'"); 
myMap.set(keyObj, 'value associated with keyObj'); 
myMap.set(keyFunc, 'value associated with keyFunc'); 
myMap.set("name", 'value associated with name'); 

console.log(myMap.size);
console.log(myMap.get(keyString))

console.log(myMap.get(keyObj))

console.log(myMap.get(keyFunc))

console.log(myMap.has("name"))


//Set 
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: trueconsole.log(set1.has(6));
// expected output: false


var user = require("moduleTest");

console.log("User From Module :- ", user);























//output of the following

// (function(){
//     var a = b = 3;
// })();

// console.log(b);
// console.log("a defined? " + (typeof a !== 'undefined')); // false
// console.log("b defined? " + (typeof b !== 'undefined')); // true


// console.log(1 == "1") //true : compares value only

// console.log(1 === "1") //false : compares value and type both

// this.selectedItem = this.items.filter(itemm => {
//     for (const id of item) {
//         if (itemm._id == id) {
//             return itemm;            
//         }
//     }
// });

// this.items.filter(itemm => {
//     for (const id of item) {
//         if (itemm._id == id) {
//             this.selectedItem.push(itemm);
//         }
//     }
// });
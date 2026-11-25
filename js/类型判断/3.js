let s = 'hello';
let n = 1;
let b = true;
let u = undefined;
let nul = null;
let sym = Symbol('sym');
let bg = 100n

let obj = {};
let arr = [];
let fn = function () { };
let date = new Date();

// console.log(obj instanceof Object);
console.log(arr instanceof Array);  // arr.__proto__ === Array.prototype
console.log(arr instanceof Object); // Array.prototype.__proto__ === Object.prototype

// console.log(fn instanceof Function);
// console.log(date instanceof Date);

// console.log(s instanceof String);
// console.log(n instanceof Number);
// console.log(b instanceof Boolean);
// console.log(sym instanceof Symbol);
// console.log(bg instanceof BigInt);



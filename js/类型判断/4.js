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

console.log(Object.prototype.toString.call(fn).slice(8, -1));
// Object.prototype.toString 它会读取对象值的内部属性 [[class]]，而这个 [[class]] 属性就是这个值的类型


Object.prototype.toString.call(n)  // '[object Number]'
// 对象转字符串

// let a = {}
// console.log(a.toString());
// console.log(a.valueOf());
// console.log(String(a));   // a.toString()   // "[object Object]"

// a.toString()  ==>  ToObject(a)  ==> a  ==> Object  ==> "[object Object]"
// 1.toString() ==> ToObject(1) ==> {1}  ==> Number ==> "[object Number]"



// 对象转数字
let a = {}
console.log(Number(a));

// ToNumber(a)  ==>
// let primValue = ToPrimitive(a, Number)
// a.valueOf()
// a.toString()   ==> primValue == "[object Object]"
// ToNumber(primValue)  NaN

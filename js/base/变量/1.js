//var
// var a = 10
// var age = 20
// console.log(a + 1)
console.log(age)//undefined
var age = 30

//let
// console.log(b)//ReferenceError: b is not defined，let变量是块级作用域，
// 只能在声明的块级作用域内使用，不能在声明的块级作用域外使用，
let b = 20
b = 30//可以重新赋值
//  let b = 30//SyntaxError: Identifier 'b' has already been declared，不能重复声明



const c = 30
c = 40//SyntaxError: Assignment to constant variable.不能重新赋值


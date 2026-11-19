// let a = 'hello'
// let b = 'hello'
// console.log(a === b)
// true

let a = symbol('a')
let b = symbol('a')//定义一个独一无二的值
console.log(a === b)
// false

// for (var i = 0; i < 5; i++) {//i会泄露到全局作用域，导致全局作用域的i也等于5
//     console.log(i)
// }
// console.log(i)
//5

// for (let i = 0; i < 5; i++) {//let与{}会形成一个块级作用域
//     console.log(i)
// }
// console.log(i)//报错，i在块级作用域中是不可访问的



{
    let a = 10
    var b = 20
    const c = 30
}
console.log(a)//报错，a在块级作用域中是不可访问的
console.log(b)//20，b在块级作用域中是可访问的
console.log(c)//报错，c在块级作用域中是不可访问的

//const只能定义常量，并且不能重新赋值
//let可以定义变量，并且可以重新赋值

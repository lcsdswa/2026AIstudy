// let fu = {
//     a: 100,
// }

// function fn(x, y) {
//     console.log(this.a, x + y)
// }
// fn.call(fu)//把函数中的 this强行指向对象中
// fn.call(fu, 1, 2)//把函数中的 this强行指向对象中，同时传递参数



// let obj = {
//     a: 100,
// }
// function fn(x, y) {
//     console.log(this.a, x + y)
// }
// fn.apply(obj, [1, 2])//用数组传递参数，数组中的元素对应函数的参数顺序

let obj = {
    a: 100,
}
function fn(x, y) {
    console.log(this.a, x + y)
}
let foo = fn.bind(obj, 1, 2)//绑定函数，把函数中的 this 指向对象中，同时传递参数
foo()//调用绑定后的函数，会用参数传递的参数调用原函数

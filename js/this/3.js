// let obj = {
//     a: 1,
//     b: 18,
//     foo: function () {
//         console.log(this.a)
//     }
// }
// obj.foo()



function fn() {
    console.log(this)
}
let m = {
    a: 100,
    fn: fn
}
let n = {
    a: 2,
    fn: m
}
n.fn().fn()

function foo(str) {
    eval(str)//var b=30;let b=20,让原本不属于这里的代码变得天生就定义在这里一样
    console.log(a, b)
}
let a = 10
foo('let b = 20')
foo('var b = 30')
function foo() {
    var age = 18
    let height = 1.8
    function bar() {
        console.log(age)
    }
    return bar
}

var baz = foo()//返回bar函数
baz()

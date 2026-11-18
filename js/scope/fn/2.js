function foo(a) {
    let b = 2

    function bar() {
        console.log(a, b, c)
    }
    bar()//a和b可以访问，c无法访问

    let c = 3
}
foo(1)
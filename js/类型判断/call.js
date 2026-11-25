Function.prototype.mycall = function (context) {
    // 谁调用我，我就把谁里面的this掰弯到 context
    // 谁调用我，我就把谁添加到context这个对象里面，再让context调用它
    // this
    context.fn = this
    context.fn()
    delete context.fn
}


let obj = {
    a: 1
}
function foo() {
    console.log(this.a);
}
foo.mycall(obj)

console.log(obj);


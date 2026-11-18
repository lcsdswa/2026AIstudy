let a = 10

if (a) {
    console.log(a) //暂时性死区，
    // 原理：预编译阶段，将变量声明作为AO的属性，
    // 值为undefined，但是变量赋值操作在预编译阶段之后，所以会报错，因为a是undefined，不能调用
    let a = 20
}

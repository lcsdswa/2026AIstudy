// function fn() {
//     function foo() {
//         this.a = 2//往全局对象中添加一个属性 a，值为 2
//     }
//     foo()
// }

// let obj = {
//     a: 100,
//     baz: fn
// }
// obj.baz()

function fn() {
    let bar = () => {
        this.a = 2//往全局对象中添加一个属性 a，值为 2
    }
    bar()
}

let obj = {
    a: 100,
    baz: fn
}
obj.baz()




let foo = () => {
    let bar = () => {
        let arr = () => {
            this.a = 2
        }
        arr()
    }
    bar()
}
foo()
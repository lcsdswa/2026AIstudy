// function A() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('A');
//       resolve()
//     }, 1000)
//   })
// }

// function B() {
//   console.log('B');
// }

// A().then(() => {
//   B()
// })


function A() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('A');
            resolve()
        }, 1000)
    })
}

function B() {
    console.log('B');
}

await A()
B()


// async function foo() {  // async 会让函数返回一个Promise对象
//   await A()   // await 只能约束Promise对象
//   B()
// }
// // await 让右侧代码变成了同步任务，await 会将后续的代码挤到微任务队列中
// foo()

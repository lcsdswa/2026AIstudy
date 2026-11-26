setTimeout(() => {
    console.log('执行了')//耗时，异步代码
}, 3000)//执行一次
let a = 100
console.log(a)//不耗时，同步代码
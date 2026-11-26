// let a = 100
// console.log(a)//不耗时，同步代码

// for (let i = 0; i < 100000; i++) {

// }//不耗时，同步代码

// setTimeout(() => {
//     console.log('执行了')//耗时，异步代码
// }, 3000)//执行一次


// setInterval(() => {
//     console.log('执行了')//耗时，异步代码
// }, 3000);//每隔三秒执行一次，循环执行


fetch('https://mock.mengxuegu.com/mock/66585c4db462b81cb3916d3e/songer/songer')
    .then(res => { return res.json() })
    .then(data => { console.log(data) })//耗时，异步代码

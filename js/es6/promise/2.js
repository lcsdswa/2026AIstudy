function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('相亲圆满')
            resolve()
        }, 3000)
    })
}
function marry() {
    return new Promise((resolve, reject) => {//返回一个 Promise 对象
        setTimeout(() => {
            console.log('结婚了')
            resolve()//将 Promise 状态设置为 fulfilled
            // 并将结果传递给 then 方法中的回调函数
        }, 2000)
    })
}
function baby() {
    setTimeout(() => {
        console.log('小刘出生了')
    }, 1000)
}



xq().then(() => { return marry() })//返回一个 Promise 对象
    .then(() => { baby() })
//then的码源中会返回一个 Promise 对象并继承前一个 Promise 对象的状态和结果
//如果我们认为返回一个promise对象，那么then就不会启用自己的返回，而是
// 会采用返回的promise对象的状态和结果

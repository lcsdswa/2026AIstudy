function Promise() {
    this.status = 'pending'
    this.arr = [thenCB]
    this.catchArr = [catchCB]
    const resolve = () => {
        this.status = 'fulfilled'
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i]()
        }
    }//成功,将 Promise 状态设置为 fulfilled

    const reject = () => {
        this.status = 'rejected'
        for (let i = 0; i < this.catchArr.length; i++) {
            this.catchArr[i]()
        }
    }//失败,将 Promise 状态设置为 rejected
    fn(resolve, reject)//执行函数

}
let p = new Promise((resolve, reject) => {
    resolve()
})
p.then(() => { foo() }).catch(() => { bar() })
//then 里面的代码想要执行,必须等待then前面的那个 Promise 实例对象中的状态为 fulfilled 

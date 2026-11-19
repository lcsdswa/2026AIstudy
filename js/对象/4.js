// let arr = new Array()//数组也是一种对象
// arr.push(1)
// console.log(arr)

function Car(color) {
    this.name = 'su7'
    this.height = 1.8
    this.weight = 1500
    this.color = color
    this.lang = 4800
}
Car.prototype.push = function () {
    console.log('push执行了')
}
let car1 = new Car(red)//构造函数中拥有的属性最终会被添加到新创建的对象实例中
console.log(car1)
//car1.__proto__=Car.prototype
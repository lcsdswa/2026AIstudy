let obj = new Object()//创建一个空对象
console.log(obj)


let Car1 = {
    name: 'su7',
    height: 1.8,
    weight: 1500,
    color: 'red',
    lang: 4800,
}




function Car(color) {
    this.name = 'su7'
    this.height = 1.8
    this.weight = 1500
    this.color = color
    this.lang = 4800
}
let car1 = new Car(red)
let car2 = new Car(blue)
let car3 = new Car(green)
console.log(car1)
console.log(car2)
console.log(car3)

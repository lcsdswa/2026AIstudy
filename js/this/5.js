Person.prototype.sports = 'running'
function Person() {
    //new obj={}             //1
    //Person.call(obj)      //2
    this.name = '张三'     //3
    this.age = 18
    //  obj.__proto__ = Person.prototype    //4
    //return obj   //5
}
let p = new Person()
console.log(p)

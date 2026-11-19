let obj = {
    name: '杨以清',
    age: 18,
}
obj.girlfriend = '张三'

obj.age = 20

delete obj.girlfriend

let a = 'hello'
obj[a] = 'world'


console.log(obj)
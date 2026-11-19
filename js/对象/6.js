const n = 123
n.a = 100//正在往数字对象中添加一个属性 a，但是会立马被删除
console.log(n.a)//undefined
console.log(n)//123

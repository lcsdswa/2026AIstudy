var str = 'hello'//new String()
//var obj = {
// }
str.a = 100//正在往字符串对象中添加一个属性 a
//str是原始类型，不能添加是属性 delete  str.a
console.log(str)//不报错，读取的是[[PrimitiveValue]]
console.log(str.a)//undefined
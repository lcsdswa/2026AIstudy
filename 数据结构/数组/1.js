let arr = [1, 2, 3, 4, 5]
arr.unshift(0)//在数组的开头添加一个元素
arr.shift()//删除数组的开头元素
arr.push(6)//在数组的结尾添加一个元素
arr.pop()//删除数组的结尾元素

arr.splice(2, 1)//删除数组的第3个元素
let res = arr.splice(2, 1)//splice自带返回值，返回删除的元素数组
arr.splice(3, 0, 7)//在数组的第4个元素位置添加一个元素7

console.log(res)
console.log(arr)
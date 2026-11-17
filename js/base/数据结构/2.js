// let obj = {
//     name: '张三',
//     age: 18,
//     sex: '男',
//     like: {
//         sport: '篮球',
//         music: '摇滚'
//     }
// }
// console.log(obj.like.sport)

let arr = ['张三', 18, true, { a: 1 }]
// console.log(arr[0])
//增加
arr.push(undefined)//在数组的末尾添加一个元素
arr.unshift('男')//在数组的开头添加一个元素
//删除
arr.pop()//删除数组的末尾元素
arr.shift()//删除数组的开头元素
//修改

console.log(arr)

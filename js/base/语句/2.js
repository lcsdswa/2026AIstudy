// let arr = [1, 2, 3, 4, 5]
// let res = []
// for (i = 0; i < arr.length; i++) {
//     // res[i] = arr[i] ** 2
//     let val = arr[i] ** 2
//     res.push(val)
// }
// console.log(res)



// let str = ['a', 'b', 'c', 'd']
// let abc = []
// for (i = 0; i < str.length; i++) {
//     let val = str[i] + 'o'
//     abc.push(val)
// }
// console.log(abc)

let arr = [1, 4, 79, 100, 28, 29, 10, 26, 24, 39]
for (i = 0; i < arr.length; i++) {
    if (arr[i] == 100) {
        console.log(`找到了，下标为${i}`)
        break
    }
}

let buu = [1, 4, 70, 2, 48, 99, 100, 54]
let c = 0;
while (buu[c] !== 100) {
    c++;
}
console.log(`100在数组中的索引为${c}`)
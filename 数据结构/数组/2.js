// let nums = [2, 7, 11, 15]
// target = 9
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// }
// console.log(twoSum(nums, target))



let nums = [2, 7, 11, 15]
target = 9
var twoSum = function (nums, target) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (obj[diff] != undefined) {
            return [obj[diff], i]
        }
        obj[nums[i]] = i
    }
}
console.log(twoSum(nums, target))


//对象[]是对象的属性，对象的属性是字符串，对象的属性值是任意类型
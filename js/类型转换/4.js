Number([1, 2, 3])
// ToNumber([1, 2, 3])
// ToPrimitive([1, 2, 3], Number)  // [1, 2, 3].toString()  // "1,2,3"
// ToNumber("1,2,3")  // NaN


// if ([]) {
//   console.log(123);
// }


// [] == {}
// Number([])             ==                Number({})
// ToNumber([])             ==                ToNumber({})
// ToPrimitive([], Number)  // ""              ToPrimitive({}, Number) // "[object Object]"
// ToNumber("")  // 0                         ToNumber("[object Object]") // NaN



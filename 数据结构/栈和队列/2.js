const stack = []//栈没有专属的结构，用数组模拟栈

stack.push('巧乐兹')//入栈
stack.push('老冰棍')//入栈
stack.push('可爱多')
stack.push('梦龙')

// console.log(stack[0])不能访问栈底元素
console.log(stack[stack.length - 1])//栈顶元素

// for (let i = stack.length - 1; i >= 0; i--) {
//     let item = stack.pop()//pop自带返回值，返回栈顶元素
//     console.log(item)
// }

while (stack.length > 0) {
    let item = stack.pop()
    console.log(item)
}
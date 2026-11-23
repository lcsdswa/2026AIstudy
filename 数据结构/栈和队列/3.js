let str = '([{}])'

var isValid = function (s) {
    const obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        let item = s[i]
        if (item in obj) {
            stack.push(item)
        }
        else {
            if (obj[stack.pop()] !== item) {
                return false//括号不匹配
                break
            }
        }
    }
    return stack.length === 0//栈为空，说明所有括号都匹配了
}
console.log(isValid(str))

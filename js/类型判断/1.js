function add(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    } else {
        return '参数类型错误'
    }

}

console.log(add(1, 2));
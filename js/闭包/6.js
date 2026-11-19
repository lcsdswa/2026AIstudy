function add() {
    let count = 0
    return function () {
        count++
        return count
    }
}
let bar = add()

console.log(bar());// 1
console.log(bar());// 2
console.log(bar());// 3
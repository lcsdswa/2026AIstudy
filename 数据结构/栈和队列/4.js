const MyQueue = function () {
    this.stack1 = []
    this.stack2 = []
}

MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
}
MyQueue.prototype.pop = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()
}
MyQueue.prototype.peek = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2[this.stack2.length - 1]
}
MyQueue.prototype.empty = function () {
    if (this.stack1.length === 0 && this.stack2.length === 0) {
        return true
    }
    return false
}

const queue = new MyQueue()
queue.push(1)
queue.push(2)
console.log(queue.pop())
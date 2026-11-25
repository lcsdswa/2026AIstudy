function myInstanceof(l, r) {
    if (typeof l !== 'object' || l == null || typeof l !== 'function') {
        return false
    }

    while (l !== null) {
        if (l.__proto__ === r.prototype) {
            return true
        }
        l = l.__proto__
    }
    return false
}

// console.log(myInstanceof([], Array));
// console.log(myInstanceof([], Object));

console.log(myInstanceof('a', String));



// function Grandparent() {}

// Parent.prototype = new Grandparent()
// function Parent() {}

// Child.prototype = new Parent()
// function Child() {}

// let c = new Child()
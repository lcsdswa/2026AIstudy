var obj = {
    name: 'Tom',
    age: 18,
}
function foo(o) {
    var person = {}
    person.name = o.name
    person.age = o.age
    o.age = 20
    console.log(obj)
    console.log(person)
}
obj.age = 19
foo(obj)


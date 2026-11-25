var person = {
    name: 'Tom',
    age: 18,
    like: {
        sport: '篮球',
        music: '摇滚'
    }
}
var person2 = {
    name: 'Jerry',
    age: person.age,
    like: person.like
}
person.like.sport = '足球'
console.log(person2)
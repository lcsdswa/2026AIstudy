console.log('script start');//1
async function async1() {
    await async2()
    console.log('async1 end');//5
}
async function async2() {
    console.log('async2 end');//2
}
async1()
setTimeout(() => {
    console.log('setTimeout end');//8
}, 0)
new Promise((resolve, reject) => {
    console.log('Promise');//3
    resolve()
})
    .then(() => {
        console.log('then1');//6
    })
    .then(() => {
        console.log('then2');//7
    })
console.log('script end');//4
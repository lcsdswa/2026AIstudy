console.log(1);
setTimeout(() => {
    console.log(2);
    new Promise((resolve, reject) => {
        console.log(3);
        resolve()
    }).then(() => {
        console.log(4);
        setTimeout(() => {
            console.log(5);
        }, 0)
    }).then(() => {
        console.log(6);
    })
}, 0)
console.log(3);
//1323465
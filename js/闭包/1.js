var arr = []


// for (let i = 0; i <= 5; i++) {
//     arr.push(function () {
//         console.log(i)
//     })
// }

// for (var j = 0; j < arr.length; j++) {
//     arr[j]()
// }


for (var i = 1; i <= 5; i++) {
    function fo(j) {
        arr.push(
            function () {
                console.log(j)
            }
        )
    }
    fo(i)
}

for (var j = 0; j < arr.length; j++) {
    arr[j]()
}
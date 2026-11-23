var a = 100
function fn() {
    var a = 10
    console.log(this)
}
fn()
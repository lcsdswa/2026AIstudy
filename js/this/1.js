function fn() {
    console.log(this)
}
fn()

if (true) {
    console.log(this)
}
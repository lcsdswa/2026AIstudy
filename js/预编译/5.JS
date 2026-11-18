global = 100
function fn() {
    console.log(global);//声明了全局变量global，但是没有赋值，所以是undefined
    global = 200
    console.log(global);
    var global = 300
}
fn()
var global

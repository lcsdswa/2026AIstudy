// console.log(a);
// var a = 100;
//var a
//console.log(a);
//a=100


function fn(a) {
    console.log(a);
    var a = 200;
    console.log(a);
    var b = function () { }
    console.log(b);
    function c() { }
    var c = a
    console.log(c);
}

fn(1);

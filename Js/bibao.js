/*
*闭包
*/


// function test(){
//     var arr = [];
//     for(var i = 0; i < 10; i++){
//         arr[i] = function(){
//             console.log(i);
//         }
//     }
//     return arr
// }

// var myArr = test();
// console.log(myArr.length);

function t1() {
    var a = 2;
    function t2() {
        console.log(a);
        var a = 4;
        console.log(a);
    }
    t2();
    console.log("执行t1方法");
    console.log(a);
}
t1();

var sum = function(a,b) {
    return a + b;
}
 //1.可以去除function，在括号后面加=>
var sum1 = (a, b) => {
    return a + b;
}
//2.如果函数体只有return语句，则可以去除{}
var sum2 = (a, b) => a + b;
//3.如果参数只有一个，可以去除括号，只写这个参数
(singleParam) => { statements }
singleParam => { statements }
//4.如果没有参数，只需写个括号（）
() => { statements }
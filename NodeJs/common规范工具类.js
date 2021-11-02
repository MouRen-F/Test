//工具类
const sum = function (a,b) {
    return a + b;
}
const sub = function (a, b) {
    return a * b;
}
module.exports = {
    sum,            //使用了es6的语法，key和value值一样时，可以简写（去除value和冒号改为都好）
    sub:sub
}
//单个导出
module.exports.foo = function () {}
var a = 'asd';
var num = 1;
var bool = true;
var kong = null;
var undef = undefined;

var obj = {};
var arr = [];
var fn = function () { };
console.log("字符串 和 数组：",a instanceof Array);// 字符串 和 数组： false
console.log('字符串：',a instanceof Object);// 字符串： false
console.log('数字',num instanceof Object);// 数字 false
console.log('布尔：',bool instanceof Object);// 布尔： false
console.log('null：',kong instanceof Object);// null： false
console.log('undefined：',undef instanceof Object);// undefined： false
console.log('对象：',obj instanceof Object);// 对象： true
console.log('数组',arr instanceof Object);// 数组 true
console.log('数组 he Array',arr instanceof Array);// 数组 he Array true
console.log('方法',fn instanceof Object);// 方法 true
console.log('方法', typeof (fn));// 方法 function











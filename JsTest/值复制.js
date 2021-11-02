function copy(par) {
  if (Array.isArray(par)) {
    let length = par.length;
    let arr = [];
    for (let i = 0; i < length; i++){
      arr.push(copy(par[i]));//此处调用自己时防止数组里面再有对象或则数组
    }
    return arr;
  } else if(par instanceof Object) {
    let obj = {};
    for (const key in par) {
      if (Object.hasOwnProperty.call(object, key)) {
         obj[key] = copy(par[key]);//同上，防止对象里面再有对象或则数组
      }
    }
    return obj;
  } else {
    return par;
  }
}
var num = 123;
console.log(copy(num));
var str = 'feng';
console.log(copy(str));
var bol = true;
console.log(copy(bol));
var kong = null;
console.log(copy(kong));
var un = undefined;
console.log(copy(un));
var arr = [12, 3123, 123, { naem: 'feng' }];
console.log(arr);
var obj = {
  name: 'feng',
  arr: [1, 23, 4],
}
console.log(obj);
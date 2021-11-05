let sym = Symbol();
console.log(sym);

let obj = {
  name: 'feng',
  [Symbol('test')]: function () {
    console.log('第一个symbol');
  },
  // sym: 'aaa',
  [sym]:'ccc'
}
console.log(obj);
// obj['Symbol("test")'];  //no
// console.log(obj[sym]);  //yes
// console.log(obj.sym);      //no
// console.log(obj[Symbol()]);//no
// console.log(obj[Symbol('test')]()); //no
console.log(obj['test']);
let arr = [1, 2];
console.log(arr[Symbol.iterator]);



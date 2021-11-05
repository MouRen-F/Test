let s = new Set();
let obj = {
  name: 'feng',
  age:15,
}
let obj1 = obj;
console.log(obj1);
s.add(obj);
s.add(obj1);

console.log(s);
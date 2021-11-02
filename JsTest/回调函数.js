function a(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
  
  console.log("function a");
}
function b() {
  console.log('function b');
}
function c(callback) {
  setTimeout(() => {
    console.log('function c');
  }, 1000);
    callback();
    
}
// a(b);
// c(b);

//回调函数会异步执行，不会阻塞
function fn() {
  console.log('function fn');
}
function ff(callBack) {
  setTimeout(() => {
    
    console.log('function ff');
  }, 1000);
  callBack('fanction ff的回调函数');
}
function dd() {
  ff(function (res) {
    fn();
  })
}
// dd();
function vv() {
  setTimeout(() => {
    
    console.log("vv");
  }, 2000);
  return a;
}
// async function fn1() {
//   var gg = await this.vv();
//   b();
// }
// fn1()
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
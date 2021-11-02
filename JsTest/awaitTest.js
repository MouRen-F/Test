function foo() {
  setTimeout(() => {
    console.log('成功执行定时方法');
  }, 3000);
  return "我是一个普通返回的字符串";
}
function too() {
  let result = new Promise(function (resolve, reject) {
    setTimeout(() => {
      // console.log(a);
      console.log("成功执行定时方法");
      // resolve("我是一个普通返回的字符串");
      reject("err");
    }, 3000);
  })
  return result;
}
async function main() {
  // let res = await foo();
  // console.log(res);
  let res = await too();
  console.log('res',res);
  // too().catch(err => {
  //   console.log(err);
  // })
  console.log('hhhh');
}
main();
console.log('666');
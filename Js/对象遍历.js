let obj = {
  id: 3,
  name: '异常生物见闻录',
  issueDate: '2019-3-5',
  price: 31,
  count: 1
};
// obj.forEach(element => {
//   console.log(obj[element]);
// });

for (const key in obj) {
  console.log(obj[key]);
}

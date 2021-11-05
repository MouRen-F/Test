let data = [
  {
    id: 1,
    name: "路面交通工具",
    children: [
      { id: 1001, name: "火车" },
      { id: 1002, name: "汽车" },
    ],
  },
  {
    id: 2,
    name: "天空交通工具",
    children: [
      { id: 2001, name: "波音" },
      { id: 2002, name: "直升机" },
    ],
  },
  {
    id: 3,
    name: "海域交通工具",
    children: [
      { id: 3001, name: "轮船" },
      { id: 3002, name: "游艇" },
    ],
  },
];

function foo(data,id) {
  data.forEach((element,index,arr) => {
    if (element.id === id) {
      arr.push({
        id: 1003,
        name:'三轮',
      })
    } else {  
      element.children&&foo(element.children, id);
    }
  });
}


foo(data,1);
console.log(data);

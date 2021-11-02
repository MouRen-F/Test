const app = new Vue({
  el: '#app',
  data: {
    isshow: true,
    books:[
      {
        id: 1,
        name: '神墓',
        issueDate: '2010-9-8',
        price: 30,
        count:1
      },
      {
        id: 2,
        name: '逆天',
        issueDate: '2015-7-8',
        price: 33,
        count:1
      },
      {
        id: 3,
        name: '异常生物见闻录',
        issueDate: '2019-3-5',
        price: 31,
        count:1
      },
      {
        id: 4,
        name: '异世邪君',
        issueDate: '2015-6-4',
        price: 23,
        count:1
      }
    ],
  },
  methods: {
    subtract(item) {
      if (item.count>0) {
        item.count--;
      }

    },
    add(item) {
      if (item.count < 999) {
        item.count++;
      }
    },
    del(index) {
      this.books.splice(index, 1);
      if (this.books.length==0) {
        this.isshow = false;
      }
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },
  computed: {
    totalPrice() {
      // 基础for循环 ＞ for of 、map、filter > forEach > for in
      let totalPrice = 0;
      //方案一：普通for循环
      // let length = this.books.length
      // for (let i = 0; i < length; i++){
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      
      //方案二：for in
      // for (let i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }

      //方案三：for of
      for (let item of this.books) {
        totalPrice += item.price * item.count;
      }

      //方案四：foreach
      // this.books.forEach(element => {
      //   totalPrice += element.price * element.count;
      // });

      return totalPrice;
    }
  }
});
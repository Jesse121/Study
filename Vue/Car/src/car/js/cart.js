Vue.filter("money", function(value, type) {
  return "￥" + value.toFixed(2) + type;
})
var vm = new Vue({
  el: '#app',
  data: {
    totalMoney: 0,
    productList: [],
    checkAllFlag: false,
    delFlag: false,
    currentProduct: ""
  },
  filters: {
    formatMoney: function(value) {
      return "￥" + value.toFixed(2)
    }
  },
  mounted: function() {
    this.cartView();
  },
  methods: {
    cartView: function() {
      this.$http.get("data/cartData.json")
        .then(res => {
          this.productList = res.data.result.list;
          // this.totalMoney = res.data.result.totalMoney;
        })
    },
    changeMoney: function(product, way) {
      if (way > 0) {
        product.productQuantity++;
      } else {
        product.productQuantity--;
        if (product.productQuantity < 1) {
          product.productQuantity = 1;
        }
      }
      this.calcTotalPrice();
    },
    selectedProduct: function(item) {
      if (typeof item.checked == 'undefined') {
        // Vue.set(item,"checked",true)
        this.$set(item, "checked", true)
      } else {
        item.checked = !item.checked;
      }
      this.calcTotalPrice();
    },
    checkAll: function(flag) {
      this.checkAllFlag = flag;
      var _this = this;
      this.productList.forEach(function(item, index) {
        if (typeof item.checked == 'undefined') {
          _this.$set(item, "checked", _this.checkAllFlag)
        } else {
          item.checked = _this.checkAllFlag;
        }
      })
      this.calcTotalPrice();
    },
    calcTotalPrice: function() {
      var _this = this;
      _this.totalMoney = 0;
      this.productList.forEach(function(item, index) {
        if (item.checked) {
          _this.totalMoney += item.productPrice * item.productQuantity;
        }
      })
    },
    delConfirm: function(item) {
      this.delFlag = true;
      this.currentProduct = item;
    },
    delProduct: function() {
      var index = this.productList.indexOf(this.currentProduct);
      this.productList.splice(index, 1);
      this.delFlag = false;

    }
  }
})
// console.log(vm.$el.outerHTML);

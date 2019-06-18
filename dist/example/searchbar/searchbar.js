Page({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  // 获取最终要进行搜索的值
  getLastValue() {
    console.log(this.data.inputVal)
  }
});
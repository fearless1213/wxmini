/*
*author:Lin Ya
*date:2018-01-07
*/
Page({
  data: {
    motto: "Let's get coupon!",
  },
  //事件处理函数
  toForm: function() {
    wx.navigateTo({
      url: '../collect/collect'
    })
  },
  onLoad: function () {
  },
})

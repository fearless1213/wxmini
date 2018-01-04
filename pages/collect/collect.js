// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit: function(e) {
    let currData = e.detail.value;
    let name = currData.name,
        tel = currData.tel,
        email = currData.email,
        birthdate = currData.birthdate;
    if(!(name && tel && email && birthdate)){
      wx.showToast({
        title: 'fill all',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    
    wx.redirectTo({
      url: '../coupon/coupon'
    })
    console.log('form发生了submit事件，携带数据为：', currData)
  },
  formReset: function() {
    this.setData({
      date: ''
    })
    console.log('form发生了reset事件')
  }
})
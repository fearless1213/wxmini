/*
*author:Lin Ya
*date:2018-01-07
*/
const app = getApp()

Page({
  data: {
    couponCode: ''
  },
  onShow: function () {
    let strData = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let len = 7, str = '';
    for(let i = 0; i < len; i++){
      let random = Math.floor(Math.random() * strData.length);
      str += strData.charAt(random);
    }
    this.setData({
      couponCode: str
    })
    //console.log(app.globalData)
  },
  onHide: function () {
    this.setData({
      couponCode: ''
    })
  }
})

/*
*author:Lin Ya
*date:2018-01-07
*/
const util = require('../../utils/util.js')
const app = getApp();

Page({
  data: {
    date: '',
    isError: false,
    errorMsg: ''
  },
  onShow: function () {
  
  },
  onHide: function () {
    this.setData({
      date: '',
      isError: false,
      errorMsg: ''
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit: function(e) {
    let currData = e.detail.value;
    let name = currData.name,
        tel = currData.tel,
        email = currData.email,
        birthdate = currData.birthDate;
        
    if(!(name && tel && email && birthdate)){
      this.setData({
        isError: true,
        errorMsg: 'Please fill all information.'
      })
      return
    }else{
      this.setData({
        isError: false,
        errorMsg: ''
      })
    }

    let reg = /^13[0-9]{9}$|15[0-9]{9}$|17[1-9][0-9]{8}$|18[0-9]{9}$/

    if(!reg.test(tel)){
      this.setData({
        isError: true,
        errorMsg: 'Please enter correct tel number'
      })
      return
    }else{
      this.setData({
        isError: false,
        errorMsg: ''
      })
    }
    
    let currTime = util.formatTime(new Date());

    let userInfo = app.globalData.userInfo,
        telList = app.globalData.telList,
        emailList = app.globalData.emailList;
    if(telList.indexOf(tel) > -1){
      this.setData({
        isError: true,
        errorMsg: 'The tel number has been used!'
      })
      return
    }

    if(emailList.indexOf(email) > -1){
      this.setData({
        isError: true,
        errorMsg: 'The email address has been used!'
      })
      return
    }

    this.setData({
      isError: false,
      errorMsg: ''
    })
    telList.push(tel)
    emailList.push(email)

    userInfo.push({
      userName: name,
      mobileNum: tel,
      email: email,
      birthdate: birthdate,
      timeStamp: currTime
    })

    wx.redirectTo({
      url: '../coupon/coupon'
    })
    
  },
  formReset: function() {
    this.setData({
      date: '',
      isError: false,
      errorMsg: ''
    })
  }
})
// pages/one/one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "data": [
      { "name": "李白", "phone": "12345678910", "addr": "北京", "avater": "/res/images/OIP-C.jpg" },
      { "name": "苏轼", "phone": "12345678910", "addr": "广州", "avater": "/res/images/OIP-C.jpg" },
      { "name": "杜甫", "phone": "12345678910", "addr": "深圳", "avater": "/res/images/OIP-C.jpg" },
      { "name": "辛弃疾", "phone": "12345678910", "addr": "上海", "avater": "/res/images/OIP-C.jpg" },
      { "name": "王昌龄", "phone": "12345678910", "addr": "南京", "avater": "/res/images/OIP-C.jpg" }
    ]
  },
  clickavater() {
    console.log("success!");
  },
  clicknum(event) {
    let phonenum = event.currentTarget.dataset.number;
    console.log(phonenum);
    wx.makePhoneCall({
      phoneNumber: phonenum,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
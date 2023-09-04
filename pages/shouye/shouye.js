// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "data": [
      { "name": "李白", "phone": "12345678910", "address": "北京", "avater": "/res/images/OIP-C.jpg" },
      { "name": "苏轼", "phone": "12345678910", "address": "广州", "avater": "/res/images/OIP-C.jpg" },
      { "name": "杜甫", "phone": "12345678910", "address": "深圳", "avater": "/res/images/OIP-C.jpg" },
      { "name": "辛弃疾", "phone": "12345678910", "address": "上海", "avater": "/res/images/OIP-C.jpg" },
      { "name": "王昌龄", "phone": "12345678910", "address": "南京", "avater": "/res/images/OIP-C.jpg" }
    ]
  },
  click(event) {
    // console.log(event);
    let name=event.currentTarget.dataset.name;
    // console.log(name);
    let phone=event.currentTarget.dataset.phone;
    let avater=event.currentTarget.dataset.avater;
    let address=event.currentTarget.dataset.address;
    wx.navigateTo({
      url: '/pages/xiangqing/xiangqing?name='+name+'&phone='+phone+'&avater='+avater+'&address='+address,
      success: (result)=>{

      },
      fail: ()=>{},
      complete: ()=>{}
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
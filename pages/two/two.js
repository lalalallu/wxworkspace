// pages/two/two.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "address": "地球"
  },
  click() {
    //不适用于tabbar页面
    wx.navigateTo({
      //第一种携带参数方式
      url: '/pages/three/three?naem=' + "lalalallu" + '&age=' + 18 + '&address=' + this.data.address,
      //第二种携带参数方式
      // url: '/pages/three/three?name="lalalallu"&age=18',
      //成功回调函数
      success: (result) => {
        console.log("success");
      },
      //失败回调函数
      fail: () => {
        console.log(error);
        console.log("fail");
      },
      complete: () => { }
    });
    // wx.switchTab({
    //   url: 'pages/zhuye/zhuye',
    // });
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
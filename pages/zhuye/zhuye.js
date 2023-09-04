// pages/zhuye/zhuye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'list': [{ "icon": "/res/images/1.png", "text": "地球" },
    { "icon": "/res/images/2.png", "text": "电流" },
    { "icon": "/res/images/3.png", "text": "圆盘" },
    { "icon": "/res/images/4.png", "text": "色盘" }],
    "productlist":[{"icon":"/res/images/huaban.png","name":"滑板","price":"1000"},
    {"icon":"/res/images/pingpang.png","name":"乒乓","price":"2000"},
    {"icon":"/res/images/quanji.png","name":"拳击","price":"3000"},
    {"icon":"/res/images/shuihu.png","name":"水壶","price":"4000"}],
    currentIndex: -1
  },
  clickmenu(event) {
    this.setData({
      currentIndex: event.currentTarget.dataset.index
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
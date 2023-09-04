// pages/swiper6/swiper6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'list': [{ "icon": "/res/images/1.png", "text": "地球" },
    { "icon": "/res/images/2.png", "text": "电流" },
    { "icon": "/res/images/3.png", "text": "圆盘" },
    { "icon": "/res/images/4.png", "text": "色盘" }],
    "currentIndex":0
  },
  clickitem(event)
  {
    this.setData({
      currentIndex:event.currentTarget.dataset.index
    });
    console.log(currentIndex);
  },
  changepage(event)
  {
    this.setData({
      currentIndex:event.detail.current
    })
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
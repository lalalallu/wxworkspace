// pages/swiper4/swiper4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "toplist":["直播","推荐","热门","追番","影视"],
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
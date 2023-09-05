// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "list":[1,2,3,4,5,6,7,8],
    "avater": "/res/images/1.png",
    "website":"https://www.taobao.com"
  },
  click() {
    //不适用于tabbar页面
    wx.navigateTo({
      //第一种携带参数方式
      // url: '/pages/xiangqing/xiangqing?naem=' + "lalalallu" + '&phone=' + 18155054648 +'&avater='+ icon + '&address=' + "地球",
      url: '/pages/xiangqing/xiangqing?name='+"lalalallu"+'&phone='+18155054648+'&avater='+this.data.avater+'&address='+"地球",
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
  clickitem()
  {
    wx.navigateTo({
      url: '/pages/web01/web01?website='+this.data.website,
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
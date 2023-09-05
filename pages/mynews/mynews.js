// pages/mynews/mynews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "info":"",
    "type":""
  },
  mysearch()
  {
    var reqTask = wx.request({
      // url: 'http://hn216.api.yesapi.cn/?&s=App.Common_University.Search&return_data=0&school_name=南京&top_num=30&app_key=09DD1003FEEFE7171EB677E8B0C24086',
      url: 'http://v.juhe.cn/toutiao/index',
      data:{
        type:this.data.type,
        key:"5205d11bbf753a612023145267050b88",
      },
      success: (result)=>{
        // console.log(result);
        this.setData({
          info:result.data.result.data
        });
        console.log(this.data.info);
        // console.log(typeof(this.data.info));
      },
      fail: ()=>{
        console.log(error);
      },
      complete: ()=>{
        // console.log("complete");
      }
    });
  },
  clickitem(event)
  {
    // console.log(event.currentTarget.dataset.website);
    wx.navigateTo({
      url: '/pages/web01/web01?website='+event.currentTarget.dataset.website,
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
    this.setData({
      type:options.type
    })
    this.mysearch();
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
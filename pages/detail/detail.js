// pages/detail/detail.js
import http from '../../utils/http.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title:options.name
    })
    this.getParticulars(options.id)

  },
// 获取详情页的所有信息
  getParticulars(id){
    // 发送请求，获取列表
    const url = `shops/${id}`
    http.get(url).then(res => {
      // this.shop = res.data
      this.setData({
        shop: res.data
      })
      console.log(this.shop)
    })
  },

  preview(e){
    wx.previewImage({
      // 需要预览的图片链接列表
      urls: this.data.shop.images,
      // 当前显示图片的链接
      current:e.target.dataset.imgUrl
    })
    console.log(e)

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/home/home.js
import http from '../../utils/http.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers:[],
    categories:[]
  },
// 获取轮播图的数据
// 原来的版本
  // getSlides(){
  //   wx.request({
  //     url: 'https://locally.uieee.com/slides',
  //     success:res=>{
  //       console.log(res)
  //       this.setData({
  //         swipers:res.data
  //       })
  //     } 
  //   })
  // },
  // 封装后的获取轮播图
  getSlides(){
     http.get('slides').then(res=>{
      //  console.log(res)
        this.setData({
          swipers: res.data
        })
     }).catch(error=>{
       console.log(error)
     })
  },
  // 获取九宫格
  getCategories(){
    http.get('categories').then(res=>{
      this.setData({
        categories:res.data
      })
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSlides(),
    this.getCategories()
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
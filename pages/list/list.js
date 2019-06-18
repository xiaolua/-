// pages/list/list.js
import http from '../../utils/http.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cate_id:'',
    pageIndex:0,//当前页
    pageSize:10,//页容量
    inputVal:'',//输入框的值
    catelist:{},//数据源
    hasMore:true,//是否还有更多
    inputShowed: false,//搜索框是否显示
    inputVal: ""//输入的值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    // options 中有cate_id和name
    // 把名字放到顶部标题
    wx.setNavigationBarTitle({
      title: options.name,
    })
    // 把id放到data中
    this.data.cate_id = options.cate_id;
    // 当页面加载时调用获取列表的方法
    this.onloadData()
  },
  // 定义一个方法，可以实现下拉刷新和加载更多和渲染列表
  onloadData:function(){
    // 判断，如果已经没有数据了
    if (!this.data.hasMore) {return}
    // 当前页 ++ 默认是0
    this.data.pageIndex++
  //  发送请求获取
    const url = `categories/${this.data.cate_id}/shops?_page=${this.data.pageIndex}&_limit=${this.data.pageSize}&q=${this.data.inputVal}`;
    http.get(url).then(res=>{
      // 停止下拉刷新
    wx.stopPullDownRefresh()
      // 将放回的数据和新的数据拼接起来
      const newlist = [...this.data.catelist, ...res.data]
      // console.log(newlist)
      // 如果列表中的数据比总条数小，那么就代表还有数据，就是true
      // parseInt(res.header["X-Total-Count"] 总条数
      const hasMore = newlist.length < parseInt(res.header["X-Total-Count"])
      // console.log(res.header)
      this.setData({
        catelist: newlist,
        hasMore:hasMore
      })

    })
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
  // 上拉刷新
  // 刷新的时候 
  // 页数恢复默认值0
  onPullDownRefresh: function () {
    // 把页数归0
    this.data.pageIndex = 0;
    // 把列表清空
    this.setData = ({
      list:[],
      hasMore:true,
    },()=>{
      this.onloadData()
    })
  },
// -------------------------------
  // 搜索的相关方法
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  // 小叉叉 点击这个按钮把输入框的值清空
  clearInput: function () {
    this.setData({
      inputVal: ""
    },()=>{
      this.getLastValue()
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  // 获取最终要进行搜索的值
  getLastValue() {
    // console.log(this.data.inputVal)
    // 重置
    this.data.pageIndex = 0
    this.setData({
      list: [],
      hasMore: true
    }, () => {
      // 因为 setData 是异步的，必须保证setData设置完毕之后，再去调用loadData
      this.onLoad()
    })
  },
  // -------------------------------------------
  /**
   * 页面上拉触底事件的处理函数
   */
  // 下拉加载更多
  onReachBottom: function () {
    this.onloadData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// 这里封装了get的方法

// 把路径存起来
const BaseUrl = 'https://locally.uieee.com/';

// 封装一个get方法
const get = (url)=>{
  let promise = new Promise((resolve,reject)=>{
    wx.request({
      url: `${BaseUrl}${url}`,
      success:res=>{
        resolve(res)
      },
      fail:error=>{
        reject(error)
      }
    })
  })
  return promise
}

// 封装一个post方法
const post = (url,data) => {
  let promise = new Promise((resolve, reject) => {
    wx.request({
      url: `${BaseUrl}${url}`,
      method:'POST',
      data,
      success: res => {
        resolve(res)
      },
      fail: error => {
        reject(error)
      }
    })
  })
  return promise
}

export default {
  get,
  post
}
// pages/show-image/show-image.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperHeight: 0,
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList: [
      {
        value: 'https://www.hookfunc.com/public/resource/img/hookfunc.svg',
        ariaLabel: '图片1',
      },
      {
        value: 'https://i.hexuexiao.cn/up/ca/63/4a/a32912fc26b8445797c8095ab74a63ca.jpg',
        ariaLabel: '图片2',
      },
      {
        value: 'https://www.qqkw.com/d/file/p/2018/05-17/0515954b9ce3b4eee4774a73406ed5b6.jpg',
        ariaLabel: '图片3',
      },
      {
        value: 'https://img.bizhizu.com/up/b2/4c/3d/b24c3d146d3cc943b62dde9a4a2bfa37.jpg',
        ariaLabel: '图片4',
      },
      {
        value: 'https://pic1.zhimg.com/v2-b9a5ba89b1e365d15838d0d5c8f36640_r.jpg',
        ariaLabel: '图片5',
      },
      {
        value: 'https://img.bizhizu.com/up/c6/a8/19/c6a81939f04fcc4e52b2b5bdf98ed178.jpg',
        ariaLabel: '图片6',
      }
    ],
    moveDistance: {
      start: 0,
      end: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const that = this
    wx.getSystemInfo({
      success: function(res: any) {
        let clientHeight = res.windowHeight;
        console.log(res)
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;//计算为百分比
        let rpxHeight = ratio * clientHeight;
        that.setData({
            swiperHeight: rpxHeight//将计算好的高度给定义好的值
        })
      }
     })
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

  touchstartevent(e: any) {
    this.setData({
      ['moveDistance.start']: e.changedTouches[0].pageY
    })
  },

  touchendevent(e: any) {
    this.setData({
      ['moveDistance.end']: e.changedTouches[0].pageY
    })
    
    const rate = this.data.moveDistance.start - this.data.moveDistance.end
    if (Math.abs(rate) > 100) {
      wx.navigateBack()
    }
  }
})
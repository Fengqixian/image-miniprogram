// component/view/view.ts
Page({
    /**
     * 组件的初始数据
     */
    data: {
        list: [
            /* "https://www.hookfunc.com/public/resource/img/hookfunc.svg", */
            "https://i.hexuexiao.cn/up/ca/63/4a/a32912fc26b8445797c8095ab74a63ca.jpg",
            "https://www.qqkw.com/d/file/p/2018/05-17/0515954b9ce3b4eee4774a73406ed5b6.jpg",
            "https://img.bizhizu.com/up/b2/4c/3d/b24c3d146d3cc943b62dde9a4a2bfa37.jpg",
            "https://pic1.zhimg.com/v2-b9a5ba89b1e365d15838d0d5c8f36640_r.jpg",
            "https://img.bizhizu.com/up/c6/a8/19/c6a81939f04fcc4e52b2b5bdf98ed178.jpg"
        ]
    },
    onShow() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          active: 0
        })
      }
    },

    showimageevent() {
      wx.navigateTo({
        url: '../show-image/show-image'
      })
    }
})

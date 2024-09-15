// pages/user-center/user-center.ts
import {
  getInfo
} from '../../api/user.js';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },
  onLoad() {
    getInfo().then((res: any) => {
      this.setData({
        ['userInfo.nickName']: res.nickName,
        ['userInfo.avatar']: res.avatar
      })
    })
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 2
      })
    }

  },

  onChange(event: any) {
    this.setData({
      active: event.detail.index
    })
  },

  onCreatework() {
    wx.navigateTo({
      url: "../create-work/create-work"
    })
  }
})

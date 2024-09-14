// pages/user-center/user-center.ts
import {
  getInfo
} from '../../api/user.js';

Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  onLoad() {
    getInfo().then((res: any) => {
      const data = res.data
      this.setData({
        ['userInfo.author']: data.nickName,
        ['userInfo.avatarUrl']: data.avatar
      })
    })
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 1
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

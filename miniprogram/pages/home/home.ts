// pages/home/home.ts
import { wechatMiniLoginPC } from '../../api/wechat'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
        img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
        img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
        border: {
            color: '#f6f6f6',
        },
    },
    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                active: 0
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(query: { scene: string }) {
      const scene = decodeURIComponent(query.scene)
      if (scene == undefined) {
        return
      }
      
      wechatMiniLoginPC(scene).then(res => console.log(res))

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

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
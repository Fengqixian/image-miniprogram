// pages/user-center/user-center.ts
Page({
    /**
     * 页面的初始数据
     */
    data: {
        active: 1,
        userInfo: {
            image: "https://www.hookfunc.com/public/resource/img/hookfunc.svg",
            poster: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
            name: "此时此刻",
            author: "小羊羊",
            src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
        }
    },
    onShow() {
        this.getTabBar().setData({
            active: 1
        })

        this.setData({
            active: 0
        })
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
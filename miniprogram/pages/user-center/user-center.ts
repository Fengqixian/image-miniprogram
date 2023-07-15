// pages/user-center/user-center.ts
Page({
    /**
     * 页面的初始数据
     */
    data: {
        active: 0
    },
    onShow() {
        this.getTabBar().setData({
            active: 1
        })
    },

    onChange(event: any) {
        this.setData({
            active: event.detail.index
        })
    }
})
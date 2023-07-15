// pages/user-center/user-center.ts
Page({
    /**
     * 页面的初始数据
     */
    data: {
        active: 1
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
    }
})
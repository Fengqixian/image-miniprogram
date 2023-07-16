// pages/create-work/create-work.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        workInfo: {
            worksName: '',
            description: ''
        },
        originFiles: [],
        gridConfig: {
            column: 4,
            width: 150,
            height: 150,
        },
        config: {
            count: 1,
        },
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    onBack() {
        wx.switchTab({
            url: '../user-center/user-center'
        })
    },

    handleSuccess(e: any) {
        const { files } = e.detail;
        this.setData({
            originFiles: files,
        });
    },
    handleRemove(e: any) {
        const { index } = e.detail;
        const { originFiles } = this.data;
        originFiles.splice(index, 1);
        this.setData({
            originFiles,
        });
    },
    handleClick(e: any) {
        console.log(e.detail.file);
    },
})
const url =  "124.220.175.128:8000" // 

const baseURL = 'http://' + url + '/v1'

const WEB_SCOKET_URL = 'ws://' + url + '/chat/ws'

export const config = {
    baseURL: baseURL,
    WEB_SCOKET_URL: WEB_SCOKET_URL
}

// 1 封装公共请求接口方法
export const request = ({
    url,
    data = {},
    method = "get"
}) => {

    return new Promise((resolve, reject) => {
        const token = wx.getStorageSync('token')
        wx.request({
            url: baseURL + url,
            data,
            method,
            timeout: 15000,
            header: {
                "Authorization": token
            },
            success: (res) => {
                if (res.data.code != 0) {
                    if (res.data.code == 50012) {
                        // 错误的令牌
                        wx.reLaunch({
                            url: 'index'
                        })
                    } else {
                        wx.showToast({
                            title: res.data.data,
                            icon: 'error',
                            duration: 2000
                        })
                    }

                    reject(res.data) // 请求失败返回的消息
                } else {
                    resolve(res.data) // 请求成功返回的数据
                }

            },
            fail: (err) => {
                wx.showModal({
                    title: '提示',
                    content: '网络开小差啦，重新进入试试~',
                    showCancel: false,
                    success(res) {
                        wx.reLaunch({
                            url: 'index'
                        })
                    }
                })
                reject(err) // 请求失败返回的消息
            }
        })
    })
};
// app.ts
import {
    getToken
} from './api/user.js';

App<IAppOption>({
  globalData: {},
  onLaunch() {
    return new Promise((resolve, reject) => {
        wx.login({
            success: res => {
                getToken({jsCode : res.code, nickName : '1', avatarUrl : '1'}).then((res2) => {
                    wx.setStorageSync('token', res2.data)
                    resolve(res2)
                })
            },fail(res) {
                reject(res);
            }
        })
    })
  },
})
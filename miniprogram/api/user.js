import {
    request
  } from '../utils/request';

// 获取令牌
export const getToken = (data) => {
    return request({
        url: '/user/getToken',
        data,
        method: "POST"
    })
}


// 获取用户信息
export const getInfo = () => {
    return request({
        url: '/user/info'
    })
}

// 更新用户信息
export const updateInfo = (data) => {
    return request({
        url: '/user/update',
        data,
        method: "POST"
    })
}

export const subscribeNotification = () => {
    return request({
        url: '/user/subscribe'
    })
}

export const getSubscribeState = () => {
    return request({
        url: '/user/subscribe/state'
    })
}
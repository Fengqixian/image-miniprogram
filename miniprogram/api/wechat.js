import {
    request
} from '../utils/request';

export const getWechatMessageTemplateIds = () => {
    return request({
        url: '/wechat/message/template/ids'
    })
}

export const wechatMiniLoginPC = (loginCode) => {
    return request({
        url: '/wechat/login/' + loginCode
    })
}
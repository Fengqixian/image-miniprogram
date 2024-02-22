import {
    request
  } from '../utils/request';
 
  export const getWechatMessageTemplateIds = () => {
    return request({
      url: '/wechat/message/template/ids'
    })
  }
import {
  request
} from '../utils/request';

export const getGoodsList = () => {
  return request({
      url: '/goods/list',
      method: "GET"
  })
}
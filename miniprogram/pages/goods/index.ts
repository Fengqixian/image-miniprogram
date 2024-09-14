import {getGoodsList} from '../../api/goods';
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [],
    img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
    img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
    img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
    marquee2: {
      speed: 60,
      loop: -1,
      delay: 0,
    },

    current: 0,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,

  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 0
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const _this = this
    getGoodsList().then(res => {
      _this.setData({
        goodsList: res.data
      })
    })
  },
  onShowCart() {
    console.log(123)
  },
  onOpenGoodsDetail() {
  }
})
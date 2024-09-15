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
    scrollHeight: 0,
    goodsList: [],
    goodsAmount: 0,
    cart: [],
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
    const window = wx.getWindowInfo()
    _this.setData({
      scrollHeight: window.windowHeight - window.statusBarHeight
    })
    getGoodsList().then(res => {
      _this.setData({
        goodsList: res.map((item: any) => {
          return {
            ...item,
            price: (item.price / 100).toFixed(2)
          }
        })
      })
    })
  },
  onShowCart() {
    console.log(123)
  },
  onOpenGoodsDetail() {
  },
  onAddCart(e: any) {
    const goodsId = e.currentTarget.dataset.id
    let newCart: any = this.data.cart
    let target = newCart.filter((e: any) => e.goodsId == goodsId)
    if (target.length === 0) {
      const goods = {goodsId: goodsId, amount: 1}
      newCart.push(goods)
    } else {
      target.map((e:any) => e.amount = e.amount + 1)
    }
    this.setData({
      cart: newCart,
      goodsAmount: newCart.reduce((sum: Number, item:any) => sum + item.amount, 0)
    })
  }
})
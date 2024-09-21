Component({
    data: {
        active: 0,
        list: [{
            icon: 'home-o',
            text: '商品',
            name: 'index',
            url: '/pages/goods/index'
        }
        ,
        /* {
            icon: 'shopping-cart-o',
            text: '购物车',
            name: 'cart',
            url: '/pages/cart/index'
        }, */
        {
            icon: 'smile-o',
            text: '我的',
            name: 'user-center',
            url: '/pages/user-center/index'
        }
        ]
    },
    ready() {
      // 缓存tabber栏的高度
      wx.getSystemInfo({
        success(res) {
          let lift = res.screenHeight - res.safeArea.bottom + 50
          wx.setStorageSync("tabbarHeight", lift)
        }
      })
    },
  
    methods: {
        onChange(event: any) {
            wx.switchTab({
                url: this.data.list[event.detail].url,
            });
        },

        init() {
            const page = getCurrentPages().pop();
            this.setData({
                active: this.data.list.findIndex(item => item.url === `/${page?.route}`)
            });
        }
    }
});

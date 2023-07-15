Component({
    data: {
        active: 0,
        list: [{
            icon: 'home-o',
            text: '看片',
            name: 'index',
            url: '/pages/index/index'
        },
        {
            icon: 'smile-o',
            text: '我的',
            name: 'user-center',
            url: '/pages/user-center/user-center'
        }
        ]
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

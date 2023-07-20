// component/voice-play/voice-play.ts
import lottie from 'lottie-miniprogram'
import animationData from './Lp8qF9DqZk';
let animation: any = null;
let innerAudioContext: any = null;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    voice: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 0 : 未播放 1：停止播放
    playState: false,
    // 音频加载状态
    loadState: false
  },

  lifetimes: {
    attached() {
      this.createSelectorQuery().select('.progress_icon').fields({node: true, size: true}).exec(res => {
        const canvas = res[0].node;
        const ctx = canvas.getContext('2d');
        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = canvas.width * dpr
        canvas.height = canvas.height * dpr
        ctx.scale(dpr, dpr);
        lottie.setup(canvas);
        animation = lottie.loadAnimation({
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            context: ctx,
          },
        });

        animation.stop()
      });

      this.init()
    },
  },

  pageLifetimes: {
    hide: function() {
      this.setData({
        playState: false
      })

      animation?.stop()
      innerAudioContext?.stop()
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 初始化音频组件
     */
    init() {
      innerAudioContext = wx.createInnerAudioContext({
        useWebAudioImplement: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
      })
      
      innerAudioContext.src = this.data.voice
      innerAudioContext.onCanplay(() => {
        this.setData({
          loadState: false
        })
      })

      innerAudioContext.onWaiting(() => {
        this.setData({
          loadState: true
        })
      })

      innerAudioContext.onEnded(() => {
        this.setData({
          playState: false
        })

        animation.stop()
      })
      
    },
    onPlay() {
      this.setData({
        playState: !this.data.playState
      })

      if (animation == null) {
          return
      }

      if (this.data.playState) {

        animation.play()
        innerAudioContext.play()
      } else {

        animation.stop()
        innerAudioContext.stop()
      }

    }
  }
})

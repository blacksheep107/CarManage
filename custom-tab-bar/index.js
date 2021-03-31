// pages/custom-tab-bar/index.js
Component({
  /**
   * 组件初始数据
   */
  data:{
    selected:2,
    color: "#bfbfbf",
    selectedColor: "#d81e06",
    list: [
      {
        pagePath: "/pages/message/message",
        text:"消息",
        iconPath: "/images/message.png",
        selectedIconPath: "/images/messageon.png"
      },
      {
        pagePath: "/pages/message/message",
        text:"论坛",
        iconPath: "/images/forum.png",
        selectedIconPath: "/images/forumon.png"
      },
      {
        pagePath: "/pages/personal_center/personal_center",
        text:"我",
        iconPath: "/images/mine.png",
        selectedIconPath: "/images/mineon.png"
      }
    ]
  },
  /**
   * 组件的方法列表
   */
  methods:{
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})
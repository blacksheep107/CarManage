// pages/personal_center/personal_center.js

Page({
  carManage() {
    wx.navigateTo({
      url: '../car_manage/car_manage',
      success:function(res){
        console.log("跳转到车辆管理页面，成功！");
      }
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success(res){
        if(res.code){
          console.log(res.code);
          wx.request({
            url: 'url',
          })
        }
      }
    });

    let that=this;
    wx.getStorage({
      key: 'userInfo',
      success:function(res){
        that.setData({
          userInfo:res.data,
          hasUserInfo:true
        });
        console.log("Get storage success, store infomation:");
        console.log(res.data);
      },
      fail:function(res){
        // 没缓存
        console.log(res);
        if (wx.getUserProfile) {
          that.setData({
            canIUseGetUserProfile: true
          })
        }
      }
    });

  },
  getInfo:function(e){
    console.log(this.data.hasUserInfo);
    if(!this.data.hasUserInfo){
      this.getUserProfile(e);
    }
    this.carManage();
  },
  getUserProfile:function(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善用户体验', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.userInfo);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        // 存储到本地
        wx.setStorage({
          data: res.userInfo,
          key: 'userInfo',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
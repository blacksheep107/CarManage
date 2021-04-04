Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    carInfo:[
      {
        "type":"汽车",
        "pictures":[
          "/images/mine.png"
        ],
        "licensePlate":"闽A12112",
        "color":"粉色",
      },
    ], // 车辆信息
  },
  onLoad() {
    console.log(this.data.carInfo.length);
    // let that=this;
    // wx.getStorage({
    //   key: 'userInfo',
    //   success:function(res){
    //     that.setData({
    //       userInfo:res.data,
    //       hasUserInfo:true
    //     });
    //     console.log("Get storage success, store infomation:");
    //     console.log(res.data);
    //   },
    //   fail:function(res){
    //     // 没缓存
    //     console.log(res);
    //     if (wx.getUserProfile) {
    //       that.setData({
    //         canIUseGetUserProfile: true
    //       })
    //     }
    //   }
    // });
  },
  addCar(){
    // go to addCar page
    wx.navigateTo({
      url: '../add_car/add_car',
      success:res=>{
        console.log(res);
      }
    })
  },
  getUserProfile(e) {
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
})
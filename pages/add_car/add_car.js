// pages/add_car/add_car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[], // 本地图片路径
    pictures:[],
    array:['电动车','汽车'],
    objectArray:[
      {
        id:0,
        name:'电动车'
      },
      {
        id:1,
        name:'汽车'
      },
    ],
    index:0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  submit(e){
    // 提交表单
    wx.request({
      url: 'url',
      data:
    })
  },
  carType:function(e){
    console.log('picker改变，值为：',e.detail.value);
    this.setData({
      index:e.detail.value
    });
  },
  chooseImageTap(e){
    let that=this;
    wx.showActionSheet({
      itemList: ['从相册中选择','拍照'],
      itemColor:'#00000',
      success:res=>{
        if(res.tapIndex==0){
          // choose from album
          that.chooseWXImage('album');
        }else if(res.tapIndex==1){
          // camera
          that.chooseWXImage('camera');
        }
      }
    })
  },
  chooseWXImage(type){
    let that=this;
    wx.chooseImage({
      count:9,
      sizeType:['original','compressed'],
      sourceType:[type],
      success:res=>{
        console.log(res.tempFilePaths[0]);
        that.setData({
          imgs:res.tempFilePaths
        });
      }
    })
  },
  upImgs(imgurl,index){
    let that=this;
    // wx.uploadFile({
    //   filePath: 'imgurl',
    //   name: 'file',
    //   url: 'url',
    //   success:res=>{
    //     console.log(res);
    //     let data=JSON.parse(res.data);
    //   }
    // })
  },
  formSubmit(e){
    // 提交
    console.log(e);
    // wx.request({
    //   url: 'url',
    //   method:'POST',
    //   data:
    // });
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
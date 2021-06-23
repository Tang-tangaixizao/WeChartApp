// pages/dont/dont.js
Page({
  data: {
    markers: [],  //地图参数：
    latitude: "", //纬度 
    longitude: "",  //经度
  },
  regionchange(e) {
    //console.log(e)
  },
  markertap(e) {
    //console.log(e)
  },
  controltap(e) {
    //console.log(e)
  },

  //获得地图
  getMyMap(e) {
    let that = this;
    //自行查询经纬度 http://www.gpsspg.com/maps.htm
    const mapLatitude = 21.445873930462945,
          mapLongitude = 109.17254598378372;
    wx.getLocation({
      type: 'wgs84', 
      success(res){
      // 当前自己的经纬度 res.latitude，res.longitude
        that.setData({
          latitude: mapLatitude,
          longitude: mapLongitude,
          markers: [{
            id: "0",
            latitude: mapLatitude,
            longitude: mapLongitude,
            iconPath: "https://xcx.quan5fen.com/Public/xcx-hitui/image/imgs-jyh/map-ico.png",
            width: 40,
            height: 40,
            callout: {
              'display': 'ALWAYS', 'fontSize': '30rpx', 'content': '广西北海桂林电子科技大学',
              'padding': '8rpx', 'boxShadow': '0 0 5rpx #333','borderRadius':'4rpx'
            }
          }],
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMyMap()
  },
})
// pages/index/index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    weather: { 'wea_img': 'qing'},//实况天气
    weatherweek:[],//七日天气
  },
  onLoad: function () {
    this.getapi();
  },
  getapi:function(){
    var _this = this;
    // 获取IP地址
    wx.request({
      url: 'https://www.tianqiapi.com/ip',
      data: {
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        //console.log(res);
        // 根据IP获取天气数据
        _this.weatherweekday("223.104.22.211");
      }
    });
  },
  // 天气api天气获取
  weatherweekday: function (ip) {
    var _this = this;
    wx.request({
      url: 'https://v0.yiketianqi.com/api?version=v62&appid=82229648&appsecret=EI8yX5u9&city=%E5%8C%97%E6%B5%B7',
      data: {
        'ip': ip
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        _this.setData({
          weatherweek: res.data
        });
        console.log(_this.data.weatherweek)
      }
    });
  }
})
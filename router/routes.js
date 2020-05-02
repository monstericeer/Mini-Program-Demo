/**
 * 页面的路由定义
 * 
 * 如果是tab页面，需要增加type属性,否则不要
 */

module.exports = {
  // 首页
  home: {
    type: 'tab',
    path: '/pages/index/index'
  },
  // 用户设置
  setting: {
    path: '/pages/setting/index'
  }
}
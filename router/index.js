
/**
 * 路由封装
 * 
 * 用法：
 * router.push({
 *   name: 'setting',  // => /pages/setting/index
 * });
 */
const routes = require('./routes.js')

function push({ name, data }) {
  const dataStr = encodeURIComponent(JSON.stringify(data));
  const route = routes[name];
  const url = route ? route.path : `pages/${name.replace(/\./g, '/')}/index`;
  if (route.type === 'tab') {
    wx.switchTab({
      url: url, // 微信底部tab页面不支持传参
    });
    return;
  }
  wx.navigateTo({
    url: `${url}?encodedData=${dataStr}`,
  });
}

function extract(options) {
  return JSON.parse(decodeURIComponent(options.encodedData));
}

module.exports = {
  routes,
  push,
  extract
};

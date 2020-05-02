import request from '../utils/request.js'
const baseUrl = getApp().globalData.baseUrl

// 登录
export function Login(data) {
  return request({
    url: `${baseUrl}/user/login.php`,
    method: 'post',
    data
  })
}

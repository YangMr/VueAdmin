import request from '../utils/request'

/**
 * 获取验证码接口
 * @returns
 */
const getCaptcha = () => {
  return request({ url: '/captcha', method: 'GET' })
}

/**
 * 登录接口
 * @param {*} data
 * @returns
 */
const login = (data) => {
  return request({ url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`, method: 'POST' })
}

/**
 * 获取用户信息接口
 * @returns
 */
const getUserInfo = () => {
  return request({ url: '/sys/userInfo', method: 'GET' })
}

/**
 * 获取权限数据
 * @returns
 */
const getNav = () => {
  return request({ url: '/sys/menu/nav', method: 'GET' })
}

/**
 * 退出登录接口
 * @returns
 */
const logout = () => {
  return request({ url: '/logout', method: 'POST' })
}

export default {
  getCaptcha,
  login,
  getUserInfo,
  getNav,
  logout
}

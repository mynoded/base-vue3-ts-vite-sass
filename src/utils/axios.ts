import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 2xx状态码都会进入这里
    return response.data
  },

  (error) => {
    return Promise.reject(error)
  }
)

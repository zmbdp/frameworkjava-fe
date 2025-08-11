import axios from 'axios';
// 创建 axios 实例
const instance = axios.create({
  // 请求的 base_url
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 600000
});
// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 对请求做点什么
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应做点什么
    return response;
  },
  (error) => {
    // 对错误做点什么
    return Promise.reject(error);
  }
);
// 导出自定义请求函数
export default ({ url, method, data, params, header }) => {
  return instance({
    url,
    method,
    data,
    params,
    header
  });
};

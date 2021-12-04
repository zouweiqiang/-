import axios from 'axios'
import config from '../config/index'
const baseURL = process.env.NODE_ENV === 'development' ? config.baseURL.dev : config.baseURL.pro

class HttpRequest{
  constructor(baseURL){
    this.baseURL = baseURL
  }
  getInsideConfig(){
    const config = {
      baseURL:this.baseURL,
      Headers:{

      }
    }
    return config
  }
  interceptors(instance){
    instance.interceptors.request.use(function (config) {
      console.log("拦截处理请求");
      // 在发送请求之前做些什么
      return config;
    }, function (error) {
      // 对请求错误做些什么
      console.log("请求错误");
      return Promise.reject(error);
    });

    instance.interceptors.response.use(function (response) {
      console.log("处理响应");
      // 对响应数据做点什么
      return response.data;
    }, function (error) {
      // 对响应错误做点什么
      console.log("响应错误");
      console.log(error);
      return Promise.reject(error);
    });
  }
  request(options){
    const instance = axios.create()
    options = { ...(this.getInsideConfig()),...options}
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseURL)

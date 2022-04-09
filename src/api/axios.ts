import axios from "axios";
import qs from "qs";
import {ElMessage,ElLoading} from "element-plus";

// Element-ui loading
let loadingInstance:any;
function StartLoading(){
    loadingInstance=ElLoading.service({
        fullscreen:true,
        text:"加载中..."
    })
}
function EndLoading(){
    loadingInstance.close();
}

axios.defaults.baseURL = "http://localhost:4000/api"; //测试
//post请求头
axios.defaults.headers.post["Content-Type"] =
  "application/json";

//允许跨域携带cookie信息
axios.defaults.withCredentials = true;

//设置超时
axios.defaults.timeout = 15000;

// 请求拦截

axios.interceptors.request.use(
  (config) => {
    StartLoading();
    console.log(config);
    return config;
  },
  (error) => {
    console.log("请求出错")
    return Promise.reject(error);
  }
);
// 响应拦截
axios.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      EndLoading();
      ElMessage({
        type:"success",
        message:"成功"
      })
      
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    console.log("响应拦截")
    alert(JSON.stringify(error));
  }
);
// 封装post、get请求
export default{
    post(url:any, data:any) {
        return new Promise((resolve, reject) => {
            axios({
                    method: 'post',
                    url,
                    data: qs.stringify(data),
                })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                });
        })
    },
    get(url:any, data:any) {
        return new Promise((resolve, reject) => {
            axios({
                    method: 'get',
                    url,
                    params: data,
                })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}

import axios from "axios";
// 请求接口前缀
axios.defaults.baseURL = "http://localhost:4000/api";
// 携带cookie
axios.defaults.withCredentials = true;
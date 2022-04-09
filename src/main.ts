import { createApp } from 'vue'
import App from './App.vue'
// 路由
import router from './router/index'
// baseapi
import api from "./api/api"
// windicss
import 'virtual:windi.css'

import 'element-plus/dist/index.css'
const app=createApp(App);
app.config.globalProperties.$baseapi=api.baseapi;
app.use(router).mount('#app')


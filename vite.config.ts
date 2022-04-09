import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 8080, // 你需要定义的端口号
    open: false, // open支持boolean/string类型，为true时打开默认浏览器，为string类型时，打开指定浏览器，具体查看官网即可
    // proxy: { // 配置本地代理地址
    //   '/dev': 'http://xxx.xxx.com/api'
    // }
  },
});

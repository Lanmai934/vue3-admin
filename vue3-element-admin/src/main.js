import { createApp } from 'vue'
import App from './App.vue'

 import ElementPlus from "element-plus";
 import "element-plus/lib/theme-chalk/index.css";
//引入中文
import 'dayjs/locale/zh-cn'
import locale from "element-plus/lib/locale/zh-cn"
//全局调用element-plus的提示插件
import {getCurrentInstance}from 'vue'
// setup(){
//     const {ctx}=getCurrentInstance();
//     ctx.$message.success("yes")
//     ctx.$loading()
// }
// 使用use注册elment-plus
createApp(App).use(ElementPlus,{
    locale,
}).use(router).mount("#app")



import { createApp } from "vue";
import AntDesign from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";

import "./assets/style/global.css";
import App from "./App.vue";

const app = createApp(App);
app.use(AntDesign);
app.use(ArcoVue);
// 警告捕获
app.config.warnHandler = (msg, instance, trace) => {
  console.warn("警告记录");
  console.warn("警告信息：", msg);
  console.warn("实例：", instance);
  console.warn("跟踪定位：", trace);
};
// 错误捕获
app.config.errorHandler = (err, instance, info) => {
  console.error("错误记录");
  console.error("错误信息：", err);
  console.error("实例：", instance);
  console.error("信息：", info);
};
app.mount("#app");

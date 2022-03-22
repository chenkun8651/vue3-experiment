import { createApp } from "vue";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";

const app = createApp(App);
app.config.warnHandler = (msg, instance, trace) => {
  console.warn("警告记录");
  console.warn("警告信息：", msg);
  console.warn("实例：", instance);
  console.warn("跟踪定位：", trace);
};
app.config.errorHandler = (err, instance, info) => {
  console.error("错误记录");
  console.error("错误信息：", err);
  console.error("实例：", instance);
  console.error("信息：", info);
};
app.component("HelloWorld", HelloWorld);
app.mount("#app");
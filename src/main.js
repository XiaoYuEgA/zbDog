import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as echarts from "echarts";
import router from "./router";
import { createPinia } from "pinia";


const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(ElementPlus);
app.config.globalProperties.$echarts = echarts;
app.use(router);

app.mount("#app");

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { ImgUtil } from "./utils/imgUtil";
// console.log("环境变量", import.meta.env);
ImgUtil.loadAllImg();
createApp(App).mount("#app");

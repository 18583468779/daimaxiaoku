import { defineConfig, CommonServerOptions } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig((mode) => {
  const envFileName: string = ".env";
  const curEnvFileName = `${envFileName}.${mode.mode}`; // 配置环境变量的文件
  console.log("curEnvFileName", curEnvFileName);
  let server: CommonServerOptions = {}; // 配置服务开发
  if (mode.mode === "development") {
    server = {
      host: "192.168.153.1",
      port: 5005,
      proxy: {
        // 代理
        "/dmxk": {
          target: "http://192.168.153.1:5003",
        },
      },
    };
    console.log("开发者模式环境");
  } else if (mode.mode === "production") {
    console.log("生产者模式环境");
  }
  return {
    // base: "dxmk", // 项目基础根路径
    plugins: [vue()],
    server,
  };
});

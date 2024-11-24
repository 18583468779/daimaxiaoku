import { defineConfig, CommonServerOptions } from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs";
import dotenv, { DotenvParseOutput } from "dotenv";
export default defineConfig((mode) => {
  const envFileName: string = ".env";
  const curEnvFileName = `${envFileName}.${mode.mode}`; // 配置环境变量的文件
  // 1.读取文件,获取不同环境下的配置文件
  const envData = fs.readFileSync(curEnvFileName, "utf-8"); // 同步读取文件，获取的是buffer数据
  const envMap: DotenvParseOutput = dotenv.parse(envData); // buffer转换为对象形式
  let server: CommonServerOptions = {}; // 配置服务开发
  if (mode.mode === "development") {
    server = {
      host: envMap.VITE_HOST,
      port: envMap.VITE_PORT,
      proxy: {
        // 代理可以解决跨域的问题
        [envMap.VITE_BASE_URL]: {
          target: envMap.VITE_PROXY_DOMAIN,
        },
      },
    };
    console.log("开发者模式环境");
  } else if (mode.mode === "production") {
    console.log("生产者模式环境");
    server = {
      host: envMap.VITE_HOST,
      port: envMap.VITE_PORT,
    };
  }
  return {
    // base: "dxmk", // 项目基础根路径
    plugins: [vue()],
    server,
  };
});

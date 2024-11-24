/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// vite默认的配置，自定义
interface ImportMetaEnv {
  VITE_username: string;
}

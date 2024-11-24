/// <reference types="vite/client" />
import "dotenv";
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "dotenv" {
  export interface DotenvParseOutput {
    VITE_HOST: string;
    VITE_PORT: number;
    VITE_BASE_URL: string;
    VITE_PROXY_DOMAIN: string;
  }
}

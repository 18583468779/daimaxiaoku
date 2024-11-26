// ctx.app这个app就是 const app = new Koa();
// ctx.app.context 全局上下文，非常有用
import Koa from "koa";
import allRouterLoader from "./common/AllRouterLoader";
const app = new Koa();

allRouterLoader.init(app);

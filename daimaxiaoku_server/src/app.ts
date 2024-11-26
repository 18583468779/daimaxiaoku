// ctx.app这个app就是 const app = new Koa();
// ctx.app.context 全局上下文，非常有用
import Koa from "koa";
import body from "koa-body";
import json from "koa-json";
import Router from "koa-router";
import userRouter from "./router/user";
import allRouterLoader from "./common/AllRouterLoader";
const app = new Koa();

const router = new Router();
router.prefix("/dmxk"); // 路由添加前缀
app.use(json());
app.use(body());

router.use(userRouter.routes(), userRouter.allowedMethods()); // 引入user路由

router.get("/test", async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = "第一个请求test";
});
allRouterLoader.init();
app.use(router.routes()); // 挂载路由
app.listen(3002, () => {
  console.log("3002");
});

import Koa from "koa";
import body from "koa-body";
import json from "koa-json";
import Router from "koa-router";

const app = new Koa();

const router = new Router();
router.prefix("/dmxk"); // 路由添加前缀
app.use(json());
app.use(body());

router.get("/test", async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = "第一个请求test";
  console.log("next", next);
});

app.use(router.routes()); // 挂载路由
app.listen(3002, () => {
  console.log("3002");
});

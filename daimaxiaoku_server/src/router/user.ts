// 用户模块

import { Context } from "koa";
import Router from "koa-router";
import { addUser } from "../dao/UserDaoDefine";
import { success } from "../common/ResResult";

const router = new Router();
router.prefix("/user");

router.get("/findUserInfo/:username", async (ctx: Context) => {
  const { username } = ctx.params;
  ctx.body = `欢迎${username}`;
});

router.post("/addUser", async (ctx: Context) => {
  const user = ctx.request.body;
  const data = addUser(user);
  ctx.body = success(data);
});

module.exports = router;

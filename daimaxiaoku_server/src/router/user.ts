// 用户模块

import { Context } from "koa";
import Router from "koa-router";
import {
  addUser,
  findAllUser,
  findByLike,
  findByUserAndAddr,
  findByUserLimit,
} from "../dao/UserDaoDefine";
import { success } from "../common/ResResult";
import UserDaoOrm from "../dao/UserDaoOrm";

const router = new Router();
router.prefix("/user");

router.get("/findUserInfo/:username", async (ctx: Context) => {
  const { username } = ctx.params;
  ctx.body = `欢迎${username}`;
});
router.get("/findAllUser", async (ctx: Context) => {
  // 获取用户列表
  // ctx.body = await findAllUser();
  ctx.body = await UserDaoOrm.findAllUser();
});
router.get("/findUser", async (ctx: Context) => {
  ctx.body = await findByLike();
});

router.get("/findAndUser", async (ctx: Context) => {
  ctx.body = await findByUserAndAddr();
});
router.get("/findByUserLimit", async (ctx: Context) => {
  ctx.body = await findByUserLimit();
});

router.post("/addUser", async (ctx: Context) => {
  //新增用户
  const user = ctx.request.body;
  const data = await addUser(user);
  ctx.body = success(data);
});

module.exports = router;

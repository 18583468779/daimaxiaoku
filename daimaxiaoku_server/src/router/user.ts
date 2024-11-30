// 用户模块

import { Context } from "koa";
import Router from "koa-router";

import { success } from "../common/ResResult";
import { userDao } from "../modules/user/dao/UserDao";

const router = new Router();
router.prefix("/user");

router.get("/findUserInfo/:username", async (ctx: Context) => {
  const { username } = ctx.params;
  ctx.body = `欢迎${username}`;
});
router.get("/findAllUser", async (ctx: Context) => {
  // 获取用户列表
  ctx.body = await userDao.findAllUser();
});
router.get("/findUser", async (ctx: Context) => {
  ctx.body = await userDao.findByLike();
});

router.get("/findAndUser", async (ctx: Context) => {
  ctx.body = await userDao.findByUserAndAddr();
});
router.get("/findByUserLimit", async (ctx: Context) => {
  ctx.body = await userDao.findByUserLimit();
});

router.post("/addUser", async (ctx: Context) => {
  //新增用户
  const user = ctx.request.body;
  const data = await userDao.addUser(user);
  ctx.body = success(data);
});

module.exports = router;

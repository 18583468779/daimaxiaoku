// 用户模块

import { Context } from "koa";
import Router from "koa-router";
import { success } from "../common/ResResult";
import { categoryDao } from "../modules/category/dao/CategoryDao";

const router = new Router();
router.prefix("/category");

router.get("/findSecThrdCtgys/:firstctgyId", async (ctx: Context) => {
  const { firstctgyId } = ctx.params;
  ctx.body = success(await categoryDao.findSecThrdCtgys(firstctgyId));
});

module.exports = router;

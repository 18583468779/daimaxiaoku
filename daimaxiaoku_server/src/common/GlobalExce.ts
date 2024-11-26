import Koa, { Context } from "koa";
import { fail } from "./ResResult";
// 全局异常处理
const globalException = async (ctx: Context, next: Koa.Next) => {
  console.log("进入通用异常");
  try {
    await next();
  } catch (error: any) {
    ctx.body = fail("错误" + error.message);
  }
};

export default globalException;

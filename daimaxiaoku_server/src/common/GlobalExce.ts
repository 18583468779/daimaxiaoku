import Koa, { Context } from "koa";
// 全局异常处理
const globalException = async (ctx: Context, next: Koa.Next) => {
  console.log("进入通用异常");
  try {
    await next();
  } catch (error: any) {
    ctx.body = "错误" + error.message;
  }
};

export default globalException;

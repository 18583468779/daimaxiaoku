import body from "koa-body";
import Koa from "koa";
import fs from "fs";
import Router from "koa-router";
import path from "path";
import json from "koa-json";
// 自动路由加载

// process.cwd(); // 执行环境路径
// __dirname; // 当前文件所在的目录路径
class AllRouterLoader {
  app!: Koa; // 定义全局变量
  // 单例设计模式
  static allRouterLoader: AllRouterLoader = new AllRouterLoader();
  // 初始化方法
  init(app: Koa) {
    this.app = app;
    const rootRouter = this.loadAllRouterWrapper();
    app.use(rootRouter.routes()); // 挂载路由
    // 4.监听方法
    this.listen();
  }
  // 1.加载所有路由文件数组(获取到的文件名)
  getFiles(dir: string) {
    return fs.readdirSync(dir); // fs.readdirSync()方法用于同步读取给定目录的内容。
  }
  // 2.加载所有路由文件绝对路径数组
  getAbsoluteFilePaths() {
    const dir = path.join(process.cwd(), "/src/router"); // 获取到router目录下的所有文件
    const allFiles = this.getFiles(dir); // 获取到的文件名
    const allFullFilePaths: Array<string> = [];
    for (const file of allFiles) {
      const fullFilePath = dir + "\\" + file;
      allFullFilePaths.push(fullFilePath);
    }
    return allFullFilePaths;
  }
  // 3.加载所有一级路由到二级路由中
  loadAllRouterWrapper() {
    // 3.0 获取一级路由
    const rootRouter = this.getRootRouter();
    // 3.1调用获取绝对路径数组方法
    const allFullFilePaths = this.getAbsoluteFilePaths();
    // 3.2调用加载所有一级路由到二级路由方法
    this.loadAllRouter(allFullFilePaths, rootRouter);
    return rootRouter;
  }
  // 获取一级路由
  getRootRouter() {
    const rootRouter = new Router();
    rootRouter.prefix("/dmxk");
    this.app.use(json());
    this.app.use(body());
    return rootRouter;
  }
  loadAllRouter(allFullFilePaths: Array<string>, rootRouter: Router) {
    for (const fullFilePath of allFullFilePaths) {
      const module = require(fullFilePath); // 判断是不是路由模块，注意这里的路由文件需要使用common.js 导出的方式
      if (this.isRouter(module)) {
        rootRouter.use(module.routes(), module.allowedMethods()); // 引入了所有的路由
      }
    }
  }
  // 自定义守卫
  isRouter(data: any): data is Router {
    return data instanceof Router;
  }
  listen() {
    this.app.listen(3002, () => {
      console.log("服务已启动:3002");
    });
  }
}

export default AllRouterLoader.allRouterLoader;

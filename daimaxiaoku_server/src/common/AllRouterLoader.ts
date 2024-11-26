import fs from "fs";
// 自动路由加载
import path from "path";

// process.cwd(); // 执行环境路径
// __dirname; // 当前文件所在的目录路径
class AllRouterLoader {
  // 单例设计模式
  static allRouterLoader: AllRouterLoader = new AllRouterLoader();
  // 初始化方法
  init() {
    this.getAbsoluteFilePaths();
    this.loadAllRouterWrapper();
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
    // 3.1调用获取绝对路径数组方法
    // 3.2调用加载所有一级路由到二级路由方法
  }
  listen() {}
}

export default AllRouterLoader.allRouterLoader;

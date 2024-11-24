// 动态管理图片
import goodStorage from "good-storage";
export class ImgUtil {
  static imgList: Record<string, string> = {}; // 存放所有的静态图片

  static storageImgLIst() {
    this.imgList = goodStorage.get("imgList") || {}; // 缓存所有的静态图片，只需要首次加载
    if (this.isEmpty()) {
      this.loadAllImg();
      goodStorage.set("imgList", this.imgList);
    }
  }

  static isEmpty() {
    //判断是不是空对象
    return Object.keys(this.imgList).length === 0;
  }

  static getImg(imgName: string) {
    // 根据图片的名字获取图片
    return this.imgList[imgName];
  }

  // 动态获取静态文件的图片
  static loadAllImg() {
    const imgMap = import.meta.glob("../assets/img/**/*.png", { eager: true });
    let absolutePath: string = ""; // 获取图片的绝对路径
    for (let relativePath in imgMap) {
      absolutePath = (imgMap[relativePath] as any).default;
      const imgName = absolutePath.substring(absolutePath.lastIndexOf("/") + 1);
      this.imgList[imgName] = absolutePath;
    }
  }
}

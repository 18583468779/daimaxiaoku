// // 接口,定义对象类型的类型

// // 特点1，可以继承,type 不可以继承

// interface Pet {
//   name: string;
//   love: number;
// }

// interface Dog extends Pet {
//   hobby: Array<string>;
// }

// // 特点2. 为多个类提供弄个统一的方法和属性声明

// interface List {
//   add(): void;
//   remove(): void;
// }

// class ArrayList implements List {
//   add(): void {
//     throw new Error("Method not implemented.");
//   }
//   remove(): void {
//     throw new Error("Method not implemented.");
//   }
// }

interface Protect {
  name: string;
  [x: string]: any;
}
let p: Protect = {
  name: "name",
  age: 110,
  100: "ok",
};


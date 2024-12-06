// // /**
// //  *
// //  *
// //  */

// // class People {
// //   name: string; // 需要赋值不然会有错误
// //   age: number;
// //   addr: string;
// //   hobby!: Array<any>; // 不用使用初始值
// //   static count: number = 0; //静态属性，这个是属于类本身的，是公共的属性不是每个对象独有的
// //   constructor(_name: string, _age: number, _addr: string) {
// //     this.name = _name;
// //     this.age = _age;
// //     this.addr = _addr;
// //     People.count++; //记录人数的数量
// //   }
// //   say() {}
// // }

// // let p1 = new People("p1", 11, "222");
// // let p2 = new People("p2", 11, "222");
// // let p3 = new People("p3", 11, "222");

// // console.log(People.count); // 3

// // class DateUtl {
// //   static fn1() {}
// //   static fn2() {}
// //   static fn3() {}
// // }

// // DateUtl.fn1();
// // DateUtl.fn2();

// // class DateUtl {
// //   constructor() {
// //     console.log("创建对象...");
// //   }
// //   fn1() {}
// //   fn2() {}
// //   fn3() {}
// // }
// // console.log("first");
// // let d1 = new DateUtl();
// // let d2 = new DateUtl();
// /**
//  * 打印顺序
//  * 1.first
//   2.创建对象...
//   3.创建对象...
//  *
// */

// // 立即执行单例模式
// // class DateUtl {
// //   static dateUtl = new DateUtl();
// //   private constructor() {
// //     console.log("创建对象...");
// //   }
// //   fn1() {
// //     console.log("fn1");
// //   }
// //   fn2() {}
// //   fn3() {}
// // }
// // console.log("first");
// // // let d2 = new DateUtl(); // 类“DateUtl”的构造函数是私有的，仅可在类声明中访问。
// // let d1 = DateUtl.dateUtl;
// // let d2 = DateUtl.dateUtl;
// // console.log(d1 === d2); // true 只会创建一个实例，并且是在class创建的时候就实现
// // DateUtl.dateUtl.fn1();
// /**
//  *  执行顺序
//  * 1.创建对象...
//   2.first
//   3.true
//   4.fn1
//  *
// */

// /***
//  * 第二种方式
//  *  这样创建单例模式的好处是，你可以随时在需要类的时候去初始化
//  *
//  */
// class DateUtl {
//   static dateUtl: DateUtl;
//   private constructor() {
//     console.log("创建对象...");
//   }
//   static getInstance() {
//     if (this.dateUtl) return;
//     this.dateUtl = new DateUtl();
//   }
//   fn1() {
//     console.log("fn1");
//   }
//   fn2() {}
//   fn3() {}
// }
// console.log("first");
// // let d2 = new DateUtl(); // 类“DateUtl”的构造函数是私有的，仅可在类声明中访问。
// let d1 = DateUtl.dateUtl;
// let d2 = DateUtl.dateUtl;
// DateUtl.getInstance(); // 这样才会初始化类
// DateUtl.getInstance();
// DateUtl.getInstance();
// DateUtl.getInstance();

// console.log(d1 === d2); // true 只会创建一个实例

class People {
  name: string; // 需要赋值不然会有错误
  age: number;
  addr: string;
  hobby!: Array<any>; // 不用使用初始值
  static count: number = 0; //静态属性，这个是属于类本身的，是公共的属性不是每个对象独有的
  money!: number;
  constructor(_name: string, _age: number, _addr: string) {
    this.name = _name;
    this.age = _age;
    this.addr = _addr;
    People.count++; //记录人数的数量
  }
  set _money(val: number) {
    if (val > 100) throw new Error("数量不能大于100");
    this.money = val;
  }
  get _money() {
    return this.money + 10; // 所有的money数量都会+10
  }
  say() {}
}

// 获取money
new People("xiewen", 11, "sss")._money = 120;

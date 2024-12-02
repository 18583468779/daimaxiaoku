// // 联合类型
// let str: string | number = "abc";
// str = 3;
// console.log(str);

// // 交叉类型
// type Obj1 = { username: string };
// type Obj2 = { age: number };
// let obj1: Obj1 = { username: "111" };
// let obj2: Obj2 = { age: 111 };
// let obj3: Obj1 & Obj2 = { username: "111", age: 111 }; // 并集

// type Data = string | number;
// function fn(data: Data): void {
//   if (typeof data == "string") {
//     console.log("字符串类型", data.length);
//   } else if (typeof data == "number") {
//     console.log("数值类型", data.toFixed(2));
//   } else {
//     console.log(data); // 这里的data的类型是never，避免出现未来拓展新的类没有对应的类型
//   }
// }

// fn("111");
// fn(1.233);

// const arr = [10, 20, 30];
// arr[0] = 100;
// const arr1 = [10, 20, 30] as const;

// arr1[0] = 100; // 无法为“0”赋值，因为它是只读属性。

// 元祖是比较特殊的数组

//1.可变元组

let customer: [string, number, string, ...any[]] = ["xiaoming", 20, "pingpong"];
//2. 可变元组结构
let [cname, age, hobby, ...rest]: [string, number, string, ...any[]] = [
  "xiaoming",
  20,
  "pingpong",
  "213123",
  123123,
  Symbol(),
];
// 3.可变元组 tag

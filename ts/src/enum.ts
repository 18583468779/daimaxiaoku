// 枚举分为 数字枚举和字符串枚举
// 数字枚举 => 只需要定义第一个变量的值，后面的值依次递增+1
enum Num {
  num1 = 1,
  num2, // 2
  num3, // 3
  num4, // 4
  num5,
  num6,
}

console.log(Num.num3); // 3
console.log(Num[4]); // num4  可以根据值取到属性

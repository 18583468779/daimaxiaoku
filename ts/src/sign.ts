// 索引访问类型
const symId = Symbol("product");
interface Product {
  [symId]: number; // 属性是一个变量
  name: string;
  price: number;
  buy(): string;
}

// 获取类型的属性
type A = Product["price"];
type B = Product["price" | "name"];
// 当我的属性是一个变量，获取属性应该怎么样获取，使用typeOF
type S = Product[typeof symId];

// 怎么获取interface定义类型的所有key
type Pkeys = keyof Product; // name| price| buy 并不会展示出我自己定义的变量symId
// 使用泛型
type AllKeys<T> = T extends any ? T : never;
type Pkeys2 = AllKeys<keyof Product>;

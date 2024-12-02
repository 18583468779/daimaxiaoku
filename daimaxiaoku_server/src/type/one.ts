export const secThrCtgys = [
  {
    secondctgyId: 1,
    secctgyname: "0-2岁",
    firstctgyId: 1,
    thirdctgyId: 1,
    thirdname: "手机",
    secctgyId: 1,
  },
  {
    secondctgyId: 1,
    secctgyname: "0-2岁",
    firstctgyId: 1,
    thirdctgyId: 2,
    thirdname: "电脑",
    secctgyId: 1,
  },
  {
    secondctgyId: 1,
    secctgyname: "0-2岁",
    firstctgyId: 1,
    thirdctgyId: 3,
    thirdname: "相机",
    secctgyId: 1,
  },
  {
    secondctgyId: 1,
    secctgyname: "0-2岁",
    firstctgyId: 1,
    thirdctgyId: 4,
    thirdname: "耳机",
    secctgyId: 1,
  },
  {
    secondctgyId: 1,
    secctgyname: "0-2岁",
    firstctgyId: 1,
    thirdctgyId: 5,
    thirdname: "智能手表",
    secctgyId: 1,
  },
  {
    secondctgyId: 2,
    secctgyname: "3-6",
    firstctgyId: 1,
    thirdctgyId: 6,
    thirdname: "小说",
    secctgyId: 2,
  },
  {
    secondctgyId: 2,
    secctgyname: "3-6",
    firstctgyId: 1,
    thirdctgyId: 7,
    thirdname: "教育",
    secctgyId: 2,
  },
  {
    secondctgyId: 2,
    secctgyname: "3-6",
    firstctgyId: 1,
    thirdctgyId: 8,
    thirdname: "科技",
    secctgyId: 2,
  },
  {
    secondctgyId: 2,
    secctgyname: "3-6",
    firstctgyId: 1,
    thirdctgyId: 9,
    thirdname: "历史",
    secctgyId: 2,
  },
  {
    secondctgyId: 2,
    secctgyname: "3-6",
    firstctgyId: 1,
    thirdctgyId: 10,
    thirdname: "艺术",
    secctgyId: 2,
  },
  {
    secondctgyId: 3,
    secctgyname: "7-10%",
    firstctgyId: 1,
    thirdctgyId: 11,
    thirdname: "男装",
    secctgyId: 3,
  },
  {
    secondctgyId: 3,
    secctgyname: "7-10%",
    firstctgyId: 1,
    thirdctgyId: 12,
    thirdname: "女装",
    secctgyId: 3,
  },
  {
    secondctgyId: 3,
    secctgyname: "7-10%",
    firstctgyId: 1,
    thirdctgyId: 13,
    thirdname: "童装",
    secctgyId: 3,
  },
  {
    secondctgyId: 3,
    secctgyname: "7-10%",
    firstctgyId: 1,
    thirdctgyId: 14,
    thirdname: "运动装",
    secctgyId: 3,
  },
  {
    secondctgyId: 3,
    secctgyname: "7-10%",
    firstctgyId: 1,
    thirdctgyId: 15,
    thirdname: "正装",
    secctgyId: 3,
  },
  {
    secondctgyId: 4,
    secctgyname: "11-14岁",
    firstctgyId: 1,
    thirdctgyId: 16,
    thirdname: "子类别D1",
    secctgyId: 4,
  },
  {
    secondctgyId: 4,
    secctgyname: "11-14岁",
    firstctgyId: 1,
    thirdctgyId: 17,
    thirdname: "子类别D2",
    secctgyId: 4,
  },
  {
    secondctgyId: 4,
    secctgyname: "11-14岁",
    firstctgyId: 1,
    thirdctgyId: 18,
    thirdname: "子类别D3",
    secctgyId: 4,
  },
  {
    secondctgyId: 4,
    secctgyname: "11-14岁",
    firstctgyId: 1,
    thirdctgyId: 19,
    thirdname: "子类别D4",
    secctgyId: 4,
  },
  {
    secondctgyId: 4,
    secctgyname: "11-14岁",
    firstctgyId: 1,
    thirdctgyId: 20,
    thirdname: "子类别D5",
    secctgyId: 4,
  },
];

export type EleOfArr<T> = T extends Array<infer E> ? E : never;

/**
 *  获取数组中元素的类型
 * type SecThrCtgy = {
    secondctgyId: number;
    secctgyname: string;
    firstctgyId: number;
    thirdctgyId: number;
    thirdname: string;
    secctgyId: number;
}
 * 
*/
type SecThrCtgy = EleOfArr<typeof secThrCtgys>; //获取数组中元素的类型

/**
 * 将获取数组中元素的类型取出来组成联合类型
 * type K = "secondctgyId" | "secctgyname" | "firstctgyId" | "thirdctgyId" | "thirdname" | "secctgyId"
 *
 */
type K = keyof EleOfArr<typeof secThrCtgys>; //

export type ItemType<T extends object[]> = {
  [K in keyof EleOfArr<T>]: EleOfArr<T>[K];
};
function getSubItemFrmArr<T extends ItemType<T>[], K extends keyof EleOfArr<T>>(
  t: T,
  ...keys: K[]
): Pick<EleOfArr<T>, K>[] {
  return t.map((item) => {
    return keys.reduce((pre, cur, index) => {
      return { ...pre, [keys[index]]: item[keys[index]] };
    }, {});
  }) as Pick<EleOfArr<T>, K>[];
}

const secondCtgys = getSubItemFrmArr(
  secThrCtgys,
  "secondctgyId",
  "secctgyname"
);
// console.log("secondCtgys", secondCtgys);

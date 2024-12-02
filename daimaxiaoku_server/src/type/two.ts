// 对象数组去重

import { EleOfArr, ItemType, secThrCtgys } from "./one";

//1.获取数组对象元素单个属性值组成的数组
function getOneItemVluesFrmArr<
  T extends ItemType<T>[],
  K extends keyof EleOfArr<T>,
  E = EleOfArr<T>
>(arr: T, k: K) {
  return arr.map(({ [k]: v }: E) => {
    return v;
  });
}

// 2.
function getNoReptValsItem(arr: any[]) {
  const data: any[] = [];
  return arr.filter((item) => !data.includes(item) && data.push(item));
}

// console.log(
//   getNoReptValsItem(getOneItemVluesFrmArr(secThrCtgys, "secondctgyId"))
// );

// 3
function getThreeItemVluesFrmArr<
  T extends ItemType<T>[],
  K extends keyof EleOfArr<T>
>(arr: T, k: K) {
  const data: any[] = [];
  const oneItem = getOneItemVluesFrmArr(arr, k);
  const towItem = getNoReptValsItem(oneItem);
  arr.forEach((item) => {
    if (towItem.includes(item[k])) {
      towItem.splice(towItem.indexOf(item[k]), 1);
      data.push(item);
    }
  });
  return data;
}

console.log(
  "getThreeItemVluesFrmArr",
  getThreeItemVluesFrmArr(secThrCtgys, "secondctgyId")
);

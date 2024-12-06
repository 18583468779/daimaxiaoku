// es5 原型和原型继承

// @ts-ignore
function Vechile(brand, price) {
  // 父类
  console.log("this", this);
  this.brand = brand;
  this.price = price;
}
Vechile.prototype.sale = function () {
  console.log(this, "销售");
};

function Bus(brand, price, seat) {
  // 子类继承
  Vechile.apply(this, [brand, price]);
  this.seat = seat;
}
function Car(brand, price, types) {
  // 子类
  Vechile.call(this, brand, price);
  this.types = types;
}

Bus.prototype = new Vechile(); // 原型指向Vechile
Bus.prototype.constructor = Bus;
let bus = new Bus("大巴", 20, 60);

// 才可以获取到sale（） 方法
console.log(bus.sale());

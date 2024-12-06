// 寄生式组合继承
function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.say = function () {
  console.log("每个人类都有的技能");
};

function protoFn(ParentClass, SonClass) {
  function Middle() {
    this.constructor = SonClass;
  }
  Middle.prototype = ParentClass.prototype;
  SonClass.prototype = new Middle();
}

function Teacher(name, age, speak) {
  //教师
}
protoFn(Human, Teacher);

new Teacher().say(); // 每个人类都有的技能

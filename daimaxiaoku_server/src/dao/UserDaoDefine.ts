import { Op } from "sequelize";
import { model } from "../defineModel";

class UserDaoDefine {
  static addUser(user: any) {
    return model.create(user); // 创建用户
  }
  static findAllUser() {
    return model.findAll({
      raw: true, // 只获取值
    }); // 查找所有的用户
  }
  static findByProps() {
    return model.findAll({
      raw: true,
      attributes: ["username"], // 投影查询 => 指定查询的数据
    });
  }
  static findByLike() {
    // 模糊查询
    return model.findAll({
      raw: true,
      where: {
        username: {
          [Op.like]: "谢%",
        },
      },
    });
  }
  static findByUserAndAddr() {
    // and or 查询
    return model.findAll({
      raw: true,
      where: {
        [Op.or]: [
          {
            username: {
              [Op.like]: "谢%",
            },
          },
          {
            address: "sasadas1213",
          },
        ],
      },
    });
  }
  static findByUserLimit() {
    // 分页查询
    return model.findAll({
      raw: true,
      limit: 3,
      offset: 5,
    });
  }
}

export const {
  addUser,
  findAllUser,
  findByLike,
  findByUserAndAddr,
  findByUserLimit,
} = UserDaoDefine;

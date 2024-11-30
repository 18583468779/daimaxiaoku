import { Op } from "sequelize";
import { model } from "../model";
// import model from '../../../modules/decorModel/user'
class UserDao {
  static userDao: UserDao = new UserDao();
  addUser(user: any) {
    return model.create(user); // 创建用户
  }
  findAllUser() {
    return model.findAll({
      raw: true, // 只获取值
    }); // 查找所有的用户
  }
  findByProps() {
    return model.findAll({
      raw: true,
      attributes: ["username"], // 投影查询 => 指定查询的数据
    });
  }
  findByLike() {
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
  findByUserAndAddr() {
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
  findByUserLimit() {
    // 分页查询
    return model.findAll({
      raw: true,
      limit: 3,
      offset: 5,
    });
  }
}

export const userDao = UserDao.userDao;

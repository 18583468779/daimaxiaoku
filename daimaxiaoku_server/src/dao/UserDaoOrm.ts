import { Op } from "sequelize";
import UserModel from "../ormmodel/user";

class UserDaoOrm {
  static findAllUser() {
    return UserModel.findAll();
  }
}

export default UserDaoOrm;

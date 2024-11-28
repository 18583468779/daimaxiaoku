import { model } from "../defineModel";

class UserDaoDefine {
  static addUser(user: any) {
    return model.create(user);
  }
}

export const { addUser } = UserDaoDefine;

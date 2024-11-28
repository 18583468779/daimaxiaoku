import { DataTypes } from "sequelize";
import { sequelize } from "../dao/BaseDaoDefine";

class UserModel {
  static createModel() {
    const model = sequelize.define(
      "user",
      {
        id: {
          type: DataTypes.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        valid: {
          type: DataTypes.TINYINT,
          allowNull: true,
        },
      },
      {
        freezeTableName: true, // true表示创建表给定的表名，false表示表名+s
        timestamps: true, // true表示加上时间戳属性
      }
    );
    model.sync({ force: false }); //同步数据库，force的值为true,表若存在则儿删除后创建，force的值为false表示表不存在才创建
    return model;
  }
}

export const model = UserModel.createModel();

import { DataTypes } from "sequelize";
import { sequelize } from "../dao/BaseDaoDefine";

class UserModel {
  static createModel() {
    return sequelize.define("user", {
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
    });
  }
}

export const model = UserModel.createModel();

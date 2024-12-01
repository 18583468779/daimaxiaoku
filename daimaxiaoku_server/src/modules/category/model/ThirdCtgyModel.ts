// 三级分类模型
import { DataTypes } from "sequelize";
import { sequelize } from "../../BaseDao";

class ThildCtgyModel {
  static createModel() {
    const model = sequelize.define("thirdctgy", {
      thirdctgyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      thirdname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      secctgyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });

    return model;
  }
}

export const thildCtgyModel = ThildCtgyModel.createModel();

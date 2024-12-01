// 二机分类模型

import { DataTypes } from "sequelize";
import { sequelize } from "../../BaseDao";

class SecondCtgyModel {
  static createModel() {
    const model = sequelize.define("secondctgy", {
      secondctgyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      secctgyname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      firstctgyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });

    return model;
  }
}

export const secondCtgyModel = SecondCtgyModel.createModel();

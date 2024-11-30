// sequelize orm 链接数据库

import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import dbConConf from "../config/dbconfig";
import path from "path";
class BaseDao {
  static baseDao: BaseDao = new BaseDao();
  sequelize!: Sequelize;
  constructor() {
    this.initSeqConf("mysql");
  }
  initSeqConf(dialect: Dialect) {
    let { host, user, password, database, port } = dbConConf.getConf();
    this.sequelize = new Sequelize(database, user, password, {
      host,
      port,
      dialect, // 表示是何种数据库
      define: { timestamps: false, freezeTableName: true },
    });
  }

  addModels() {
    const modelPath = path.join(process.cwd(), "/src/modules/decorModel");
    this.sequelize.addModels([modelPath]); // 添加模型
  }
}
const baseDao = BaseDao.baseDao;
baseDao.addModels();
export const { sequelize } = baseDao;

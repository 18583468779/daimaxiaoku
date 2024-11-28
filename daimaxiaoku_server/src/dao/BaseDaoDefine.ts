// sequelize orm 链接数据库

import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import dbConConf from "../config/dbconfig";
class BaseDaoDefine {
  static baseDaoOem: BaseDaoDefine = new BaseDaoDefine();
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
}

export const { sequelize } = BaseDaoDefine.baseDaoOem;

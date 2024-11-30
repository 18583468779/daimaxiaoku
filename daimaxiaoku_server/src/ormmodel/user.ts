import { DataTypes } from "sequelize";
import { Table, Model, Column } from "sequelize-typescript";

// 使用模型类来进行单表的查询操作
@Table({
  // 装饰器就是一个函数
  tableName: "user",
})
export default class UserModel extends Model<UserModel> {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;
  @Column({
    type: DataTypes.STRING(30),
    allowNull: false,
  })
  public username!: string;
  @Column({
    type: DataTypes.STRING(20),
    allowNull: false,
  })
  public password!: string;
  @Column({
    type: DataTypes.STRING(20),
    allowNull: false,
  })
  public address!: string;
  @Column({
    type: DataTypes.TINYINT,
    allowNull: false,
  })
  public valid!: number;
}

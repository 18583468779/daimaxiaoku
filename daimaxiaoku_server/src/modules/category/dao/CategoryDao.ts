import { sequelize } from "../../BaseDao";

// DAO 是 Data Access Object（数据访问对象）的缩写，它是一种设计模式，用于抽象和封装数据访问层，使得业务逻辑与数据访问逻辑分离。
class CategoryDao {
  static categoryDao: CategoryDao = new CategoryDao();

  async findSecThrdCtgys(firstctgyId: number) {
    // 根据一级分类id查找二级三级分类
    const sql = `select * from secondctgy sc inner join thirdctgy tc on sc.secondctgyId = tc.secctgyId where sc.firstctgyId = ${firstctgyId}`;
    return (await sequelize.query(sql))[0];
  }
}

export const categoryDao = CategoryDao.categoryDao;

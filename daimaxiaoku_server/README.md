# daimaxiaoku_server 使用 koajs

## 依赖安装

1. yarn add koa @types/koa -S
2. yarn add koa-body -S // 支持 post 请求依赖
3. yarn add koa-json @types/koa-json -S // 支持相应数据，对象转 json 格式的依赖
4. yarn add koa-router @types/koa-router -S //路由器依赖
5. yarn add jsonwebtoken @types/jsonwebtoken -S // token
6. yarn add loadash //js 工具类
7. yarn add log4js -S // 日志依赖
8. yarn add mysql @types/mysql -S // 数据库
9. yarn add reflect-metadata -S // 装饰器元数据
10. yarn add sequelize sequelize-typescript -S // orm 映射工具依赖
11. yarn add typescript ts-node -S // ts 依赖

## 路径

1. process.cwd(); // 执行环境路径
2. \_\_dirname; // 当前文件所在的目录路径
3. path.join(process.cwd(), "/src/router"); // 获取到 router 目录下的所有文件

## fs

1. fs.readdirSync()方法用于同步读取给定目录的内容。该方法返回一个数组，其中包含目录中的所有文件名或对象。 options 参数可用于更改从方法返回文件的格式。

## 数据库聚合查询

1. 查询数量 => select count(\*) as 总用户数 from user;
2. 查询最小值 => select min(id) from user;
3. 查询最大值 => select max(id) from user;
4. 分组查询 => select address,count(valid) as 总人数 from user where valid=1 group by address;
5. 分页查询 => select \* from user limit 5,3

![alt text](image.png)
![alt text](image-1.png)

## 数据表--外键的作用

```
创建 一级分类表
CREATE TABLE `dmxk`.`firstctgy` (
  `firstCtgyId` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NULL,
  PRIMARY KEY (`firstCtgyId`)
);

// 插入数据
insert into dmxk.firstctgy values(1,'童书'),(2,'电子书'),(3,'女装'),(4,'食品'),(5,'男装'),(6,'数码相机'),(7,'创意文具'),(8,'童装童鞋');
```

```
创建二级分类关联一级分类表

CREATE TABLE `dmxk`.`secondctgy` (
  `secondctgyId` INT NOT NULL AUTO_INCREMENT,
  `secctgyname` VARCHAR(20) NOT NULL,
  `firstctgyId` INT NOT NULL,
  PRIMARY KEY (`secondctgyId`),
  CONSTRAINT `fk_ctgyid` FOREIGN KEY (`firstctgyId`) REFERENCES `dmxk`.`firstctgy` (`firstCtgyId`) ON UPDATE CASCADE
);
```

```
创建三级分类关联二级分类表

create table `dmxk`.`thirdctgy` (
    `thirdctgyId` int not null auto_increment,
    `thirdname` varchar(20) not null,
     `secctgyId` int null,
     primary key (`thirdctgyId`),
     constraint fk_secctgyId foreign key(secctgyId) references secondctgy(`secondctgyId`)
);


```

## mysql 多表内连接查询

```
select * from secondctgy sc inner join thirdctgy tc on sc.secondctgyId=tc.secctgyId;

```

## mysql 多表左外连接查询

```
SELECT tc.thirdctgyId, tc.thirdname, tc.secctgyId, sc.secctgyname
FROM thirdctgy tc
LEFT JOIN secondctgy sc
ON tc.secctgyId = sc.secondctgyId;

```

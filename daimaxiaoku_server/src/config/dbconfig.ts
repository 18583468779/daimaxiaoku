// mysql 数据库配置

function isString(data: any): data is string {
  return typeof data === "string";
}

interface DbConfigConf {
  host: string;
  user: string;
  password: string;
  port: number;
  database: string;
}

interface EnvConf {
  // 环境配置
  dev: DbConfigConf;
  prod: DbConfigConf;
}
class Conf {
  static conf: Conf = new Conf();
  env!: keyof EnvConf;
  envConf!: EnvConf;
  constructor() {
    this.env = process.env.NODE_ENV ? "dev" : "prod";
    this.initConf();
  }
  initConf() {
    this.envConf = {
      dev: {
        host: "localhost",
        user: "root",
        password: "root",
        database: "dmxk",
        port: 3306,
      },
      prod: {
        host: "www.newdomain.com",
        user: "root",
        password: "root",
        database: "dmxk",
        port: 3306,
      },
    };
  }

  // 获取配置 重载
  getConf(): DbConfigConf;
  getConf(key: string): string;
  getConf(key: any = ""): any {
    if (this.isDbConConfKeys(key) && key.length > 0) {
      return this.envConf[this.env][key];
    } else {
      return this.envConf[this.env];
    }
  }
  isDbConConfKeys(key: any): key is keyof DbConfigConf {
    return (
      key === "host" ||
      key === "user" ||
      key === "password" ||
      key === "database" ||
      key === "port"
    );
  }
}

export default Conf.conf;

// 支付类
class Pay {
  // 支付父类

  bank_card_no!: string; // 捆绑银行卡号
  balance!: string; // 银行卡余额
  cost!: number; // 消费费用
  tokenId!: string; // 登录后用户访问令牌
  constructor(
    bank_card_no: string,
    balance: string,
    cost: number,
    tokenId: string
  ) {
    this.bank_card_no = bank_card_no;
    this.balance = balance;
    this.cost = cost;
    this.tokenId = tokenId;
  }
  pay() {
    console.log("我是父类的支付方法,银行卡号:" + this.bank_card_no);
  }
}

enum PayType {
  WebChat = 1,
  AliPay,
  CloudFlashPayment,
}

// 银行卡支付
class ATMPay extends Pay {
  bank_network!: string; // 银行网点
  bankno_type: any; // 银行卡类型
  bank_card_pwd: any; // 银行卡密码
  custname: any; // 顾客姓名
}

// 其他支付
class MobilePay extends Pay {
  type!: PayType;
  change!: number; // 支付平台零钱
  opendid!: string; // 用户识别身份id
  appid!: string; // 微信小程序 appid
  constructor(
    bank_card_no: string,
    balance: string,
    cost: number,
    tokenId: string,
    type: PayType,
    change: number,
    opendid: string,
    appid: string
  ) {
    super(bank_card_no, balance, cost, tokenId); // 子类传递参数给父类的写法使用super
    this.type = type;
    this.change = change;
    this.opendid = opendid;
    this.appid = appid;
  }
  say() {
    super.pay(); // 这里是调用父类的pay方法
    console.log("支付完成");
  }
}

let m1 = new MobilePay(
  "1111",
  "323213",
  23423,
  "ssad123123",
  PayType.AliPay,
  123,
  "asd",
  "asdas"
);
console.log(m1.bank_card_no);
m1.say();

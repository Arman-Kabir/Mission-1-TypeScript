class BankAccount {
  readonly id: number;
  name: string;
  //   private _balance: number;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
// getter
  get balance():number{
    return this._balance;
  }
  getBalance(): number {
    //   console.log(`My Current Balance is ${this._balance}`);
    return this._balance;
  }
//   setter
set deposit(amount:number){
    this._balance = this._balance + amount;
}

  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

class StudentAccount extends BankAccount {
  test() {
    //  this.
  }
}

const myAccount = new BankAccount(444, "Persian", 20);
//   myAccount._balance = 0;
console.log(myAccount);
console.log(myAccount.getBalance());
console.log(myAccount.deposit = 30);
console.log(myAccount.balance);

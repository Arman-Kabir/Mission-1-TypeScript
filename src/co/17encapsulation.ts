class MyBank {
  id: number;
  amount: number;
  name: string;

  constructor(id: number, amount: number, name: string) {
    this.amount = amount;
    this.id = id;
    this.name = name;
  }
}

const bank = new MyBank(101, 50000, "fahim");
// bank.amount = 0;
console.log(bank);

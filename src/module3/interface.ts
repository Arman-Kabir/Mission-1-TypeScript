type User = {
  name: string;
  age: number;
};

type extendedUser = User & {
  role: string;
};

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

type rollNumber = number;

// Object,function,Array
type addNumbersType = (num1: number, num2: number) => number;

interface IAddNumbers {
  (num1: number, num2: number): number;
}

type rollNumbersType = number[];
interface IRollNumbers{
    [index:number]:number
}
const rollNumbers: IRollNumbers = [1, 4, 5];

const addNumbers: IAddNumbers = (num1, num2) => num1 + num2;

const user: extendedUser = {
  name: "Omanush",
  age: 2000,
  role: "unknown",
};

const userWithTypeAlias: User = {
  name: "Tyler Alias",
  age: 100,
};

const userWithInterface: IUser = {
  name: "Interface",
  age: 200,
};

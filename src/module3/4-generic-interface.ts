//Generic Interface

interface CrushInterface<T,U> {
  name: string;
  husband: T;
  wife?:U
}

const crush1: CrushInterface<boolean,undefined> = { name: "Kate Winslet", husband: true };

const crush2: CrushInterface<string,null> = {
  name: "Kate Winslet",
  husband: "Persian",
};

interface HusbandInterface{
    name:string;
    salary:number;
}

const crush3: CrushInterface<> = {
  name: "Kate Winslet",
  husband: {
    name: "Persian",
    salary: 0.01,
  },
};

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["persian", "kate winslet"];

// type RelationWithSalaryType = { name: string; salary: number };

// interface
interface RelationWithSalaryInterface {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
  {
    name: "Persian",
    salary: 10000,
  },
  "ket wins",
];

type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [44, 12, 4];
const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
const rollNumbers3: GenericArray<boolean> = [true, false];

type NameRollType = { name: string; roll: number };

const userNameAndRollNumbers: GenericArray<NameRollType> = [
  {
    name: "Mr. X",
    roll: 1,
  },
  {
    name: "Mr. Y",
    roll: 2,
  },
];

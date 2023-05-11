type myArray<T> = Array<T>;

const myNumbers: myArray<number> = [1, 2, 3, 4, 5];
const myStrings: myArray<string> = ["a", "xyz", "abc", "pqr"];
const myBoolean: myArray<boolean> = [true, false, false, true];

type dataType = { name: string; age: number };

const ourInfo: myArray<dataType> = [
  { name: "fahim", age: 70 },
  { name: "mir", age: 60 },
  { name: "mezba", age: 50 },
];

// tuple in generic
type myGenType<X, Y, Z> = [X, Y, Z];

const A: myGenType<string, number, number> = ["hero", 34, 69];
const B: myGenType<number, number, string> = [45, 34, "abc"];
const C: myGenType<number, string, boolean> = [45, "Khan", true];

//generic in function
const printInfo = <P, Q>(param1: P, param2: Q): P => {
  console.log(`param1:${param1},param2:${param2}`);
  return param1;
};
console.log(printInfo<string, number>("fahim", 32));
console.log(printInfo<boolean, number>(true, 33));
console.log(printInfo<boolean, string>(true, "gello"));

//generic in interface
interface IMe<T, U> {
  name: string;
  age: T;
  mark: U;
}

const me: IMe<string, number> = {
  name: "Firoz",
  age: "23 years",
  mark: 34,
};

//keyof
type MovieType = {
    name:string,
    duration:number,
    category:string,
}

type test = 'name'

type myMoviesType = keyof MovieType // 'name' | 'duration' | 'category'
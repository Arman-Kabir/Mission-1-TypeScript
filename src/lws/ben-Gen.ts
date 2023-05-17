type numArray = Array<number>;
type strArray = Array<string>;

const last = <T>(arr: T[]): T => {
  return arr[arr.length - 2];
};
const l = last<number>([9, 8, 7]);
const l2 = last<string>(["a", "b", "c"]);
// console.log(l2);

const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(5, 6);
const v2 = makeArr("a", "b");
const v3 = makeArr<string | null, number>(null, 5);
// console.log(v3);

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const v4 = makeFullName({ firstName: "Bob", lastName: "junior", age: 15 });
const v5 = makeFullName({ firstName: "Bob", lastName: "junior", age: 15 });

// console.log(v4);

//interface
interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;

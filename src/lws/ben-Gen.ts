type numArray = Array<number>;
type strArray = Array<string>;

const last = <T>(arr: T[]): T => {
  return arr[arr.length - 2];
};

const l = last<number>([9, 8, 7]);
const l2 = last<string>(["a", "b", "c"]);
console.log(l2);

// type assertion --- as
const thinkSomething: unknown = "34.456987";
const result = thinkSomething as string;
console.log((thinkSomething as string).length);

const myLuckyNumber = (num: string | number): number | string => {
  if (typeof num === "string") {
    return " this is  string";
  } else if (typeof num === "number") {
    return num;
  }else{
    return num;
  }
};

console.log(myLuckyNumber(6));

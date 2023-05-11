//of guard
type typeOfData = number | string;
const doSomething = (a: typeOfData): typeOfData => {
  if (typeof a === "number") {
    return a;
  }
  return a;
};

console.log(doSomething(23));
console.log(doSomething("hello"));

//in guard
type X = {
  name: string;
  phone: number;
};

type Y = {
  name: string;
  address: string;
  salary: number;
};

const getInfo = (info:X|Y) => {
    if('phone' in info ){
        return `Type A:phone: ${info.phone}`;
    }else if('salary in info'){
        return `Type B: salary: ${info.salary}`;
    }
};

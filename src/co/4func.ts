// normal func
function heroNormalFunc(a: number, b: number): number {
  const sum = a + b;
  return sum;
}

// console.log(heroNormalFunc(2,3));

// arrow func
const heroArrowFunc = (c:number, d:number):string => {
  return `${c + d}`;
};

console.log(heroArrowFunc(5,6));
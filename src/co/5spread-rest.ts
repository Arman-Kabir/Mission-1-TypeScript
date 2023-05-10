//spread
const heroArr1: string[] = ["Khan", "jalil", "siam"];
const heroArr2: string[] = ["alom", "faru", "raz"];

heroArr1.push(...heroArr2);
// console.log(heroArr1);

//rest
const heroScore = (...score: number[]): number => {
  let sum: number = 0;
  score.map((n) => {
    sum = sum + n;
  });

  return sum;
};
// console.log(heroScore(1, 4, 5,  8, 9));

// rest using string
const heroString = (...strings: string[]): void => {
  strings.map((str) => console.log(str)); 
};
console.log(heroString("programming", "hero", "apollo", "web"));

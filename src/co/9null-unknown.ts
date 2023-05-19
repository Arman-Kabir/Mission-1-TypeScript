//null
const myText = (text: string | null): void => {
  if (text === null) {
    console.log("I have no text");
  } else {
    console.log(text);
  }
};

console.log(myText(null));
console.log(myText("This is not a null value"));

const guessSomething = (myGuess: unknown) => {
  console.log(myGuess);
};
console.log(guessSomething(23));
console.log(guessSomething("Hello"));
console.log(guessSomething(null));
console.log(guessSomething(undefined));
console.log(guessSomething(true));  

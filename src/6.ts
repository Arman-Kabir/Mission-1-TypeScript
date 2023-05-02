// normal function
// default parameter

function add(num1: number = 10, num2: number = 10): number {
  return num1 + num2;
}

add(30, 50);

//   spread operator
const myFriends = ["chandler", "joey", "ross"];
const newFriends = ["monica", "rachel", "pheobe"];

myFriends.push(...newFriends);

console.log(myFriends);

// rest parameter

const greetFriends = (
  friend1: string,
  friend2: string,
  friend3: string
): void => {
  console.log(`Hi ${friend1}\n Hi ${friend2} \n Hi ${friend3}`);
};

greetFriends("Kashem","Hashem","Gashem","Lashemn","bangla vai");

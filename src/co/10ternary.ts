const isHeroAvailable: boolean = false;

if (isHeroAvailable) {
  console.log("book now");
} else {
  console.log("u can't book");
}

const checkAvialability = isHeroAvailable ? "book now" : " can't book";

console.log(checkAvialability);

//nullish operator
//check null and undefined
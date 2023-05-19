// union will take everything, intersection will take the common ones.

type HeroTypeA = {
  name: string;
  age?: Number;
};

type HeroTypeB = HeroTypeA & {
  salary: number;
  position?: string;
};

const HeroData: HeroTypeB = {
  name: "jalil",
  age: 23,
  salary: 35624,
  position: "Developer",
};

const myFavHero: HeroTypeA | HeroTypeB = {
  name: "Khan",
  age: 30,
  salary: 34454,
  position: "Actor",
};

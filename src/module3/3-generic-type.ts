// type GenericTuple<X, Y> = [X, Y];

// const relation: GenericTuple<string, string> = ["persian", "kate winslet"];

// type RelationWithSalaryType = { name: string; salary: number };

// // interface 

// const relationWithSalary: GenericTuple<RelationWithSalaryType, string> = [
//   {
//     name: "Persian",
//     salary: 10000,
//   },
//   "ket wins",
// ];

// const relationWithSalary2: GenericTuple<object, string> = [
//   {
//     name: "Persian",
//     salary: 10000,
//   },
//   "ket wins",
// ];

// type GenericArray<T> = Array<T>;

// const rollNumbers: GenericArray<number> = [44, 12, 4];
// const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
// const rollNumbers3: GenericArray<boolean> = [true, false];

// type NameRollType = { name: string; roll: number };

// const userNameAndRollNumbers: GenericArray<NameRollType> = [
//   {
//     name: "Mr. X",
//     roll: 1,
//   },
//   {
//     name: "Mr. Y",
//     roll: 2,
//   },
// ];

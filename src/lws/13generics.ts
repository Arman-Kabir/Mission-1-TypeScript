// /**
//  * Generic is re-usable block of code which we can use in case of type. We can take type as variable. When user give us data of any type - if we want to hold that type of data.
//  */

// const addID = <
//   T extends {
//     name: string;
//     age: number;
//   }
// >(
//   obj: T
// ) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };

// let user = addID({
//   name: "Mashrafi",
//   age: 40,
//   country:'Bang'
// });

// // let user = 'Mashrafi';

// addID(user);

// // console.log(addID('masha'));

// // console.log(user);

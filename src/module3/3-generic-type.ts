type GenericTuple<X,Y> = [X,Y]

const relation:GenericTuple<string,string> = ['Persian','Kate Winslet']; 

type relationWithSalaryType = {
    name:string,salary:number
}


const relationWithSalary:GenericTuple<relationWithSalaryType,string>=[{
    name:"Persian",
    salary:10000
},
    "Kate Winslet",
];




type GenericArray<T> = Array<T>

const rollNumbers: GenericArray<number> = [44, 12, 4];
const rollNumbers2: GenericArray<string>= ["44", "12", "4"];

const rollNumbers3:GenericArray<boolean> =[true,false];


type NameRollType={
    name:string,roll:number
}
const userNameAndRollNumbers:GenericArray<NameRollType>=[{
    name:'Mr. X',
    roll:1
},{
    name:'Mr. Y',
    roll:2
}];



add(3,4);

type NoobDeveloper = {
    name:string
};

// type JuniorDeveloper={
//     name:string,
//     expertise:string,
//     experience:number,
// };

type JuniorDeveloper = NoobDeveloper & {
    expertise:string,
    experience:number
}

type NextLevelDeveloper = JuniorDeveloper &{
    leadershipExperience:number;
    level:string,
}

const developer:NextLevelDeveloper ={
    name:'Next Bhai',
    expertise:'TypeScript',
    experience:2,
    leadershipExperience:1,
    
}
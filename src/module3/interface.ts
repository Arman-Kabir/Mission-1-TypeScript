type User = {
    name:string;
    age:number;
};

interface IUser {
    name:string;
    age:number; 
}

interface IExtendedUser extends IUser{
    role:string
}

const user:IExtendedUser={
    name:"Omanush",
    age:2000,
    role:"unknown",
}

const userWithTypeAlias: User={
    name:'Tyler Alias',
    age:100
}


const userWithInterface:IUser={
    name:"Interface",
    age:200,
}
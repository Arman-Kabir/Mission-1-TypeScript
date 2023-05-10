// readonly -- value can't be re-assigned
const heroObj:{
    name:string,
    readonly age:number,
    profession:string,
    isMarried?:boolean
} = {
    name:"Khan",
    age:32,
    profession:"Actor",
    isMarried:false
}

// heroObj.age= 40;
console.log(heroObj);
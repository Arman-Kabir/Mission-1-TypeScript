// readonly -- value can't be re-assigned
const heroObj:{
    heroName:string,
    readonly age:number,
    profession:string,
    isMarried?:boolean
} = {
    heroName:"Khan",
    age:32,
    profession:"Actor",
    isMarried:false
}

// heroObj.age= 40;
// console.log(heroObj);

// destructure
const {heroName} = heroObj; 
console.log(heroName);
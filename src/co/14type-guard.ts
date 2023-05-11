//of guard
type typeOfData = number | string;
const doSomething = (a: typeOfData): typeOfData => {
    if(typeof a === 'number'){
        return a;
    }
    return a;
};

console.log(doSomething(23));
console.log(doSomething('hello'));

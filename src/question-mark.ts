
// ternary operator
const age:number = 22

if(age>=18){
    console.log('Yes');
}else{
    console.log('No');
}

const isAdult = age >= 18? "Yes" : "No";
console.log(isAdult);

//nullish coalescing operator
//null and Undefined

const isAuthenticatedUser = null
const userName = isAuthenticatedUser ?? 'Guest';
console.log(userName);
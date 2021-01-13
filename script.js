// 'use strict'; 

// let hasDirversLicense = false;
// const passTest =true;
// if(passTest)hasDirverLicense=true;
// if(hasDirversLicense) console.log('I can dirve :D');


// 33.functions

// function logger(){
//       console.log('My name is Lisa.');
// }
// logger();
// logger();
// logger();
// function fruitProcessor(apples, oranges){
//       const juice =`Juice with ${apples} apples and ${oranges} orange.`;
//       return juice;
// }
// const appleJuice=fruitProcessor(3,2);
// console.log(appleJuice);


//34.
// function calcAge1(birthYear){
//     return 2037-birthYear;
// }
// const age1=calcAge1(1988);
// console.log(age1);

// const calcAge2=function(birthYear){
//       return 2037-birthYear;
// }
// const age2=calcAge2(1992);
// console.log(age1,age2);
//arrow function
//function expression
const calcAge2 =function (birthYear){
      return 2037-birthYear;
}
//arrow function
const calcAge3 = birthYear => 2037-birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName)=>{
      const age =2037-birthYear;
      const retirement = 65-age;
      return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1980,'bob'))

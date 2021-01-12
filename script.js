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
function fruitProcessor(apples, oranges){
      const juice =`Juice with ${apples} apples and ${oranges} orange.`;
      return juice;
}
const appleJuice=fruitProcessor(3,2);
console.log(appleJuice);

//-----> map method

// array
// const arrElm = [1, 2, 3, 4];

//---> regular function
// const a = arrElm.map(function(elm){
//     return elm * elm;
// })
// console.log(a);

//---> arrow function
// const a = arrElm.map(elm => elm * elm)
// console.log(a);

//---> arrow function + curly bracket
// const a = arrElm.map(elm => {
//     return elm * elm;
// })
// console.log(a);

// another way
// function multiply(mult){
//     return mult * mult;
// }
// console.log(arrElm.map(multiply));



//----- array object
// const users = [
//   { name: 'Rahim', age: 25, salary: 30000 },
//   { name: 'Karim', age: 30, salary: 45000 },
//   { name: 'Salam', age: 22, salary: 25000 },
// ];
// console.log(users.map(user => user.name));



//-----> forEach method
// const arrElm = [1, 2, 3, 4];
// const a = arrElm.forEach(n => {
//     console.log( n);
// }) // return nothing



//-----> filter method
// const arrElm = [1, 2, 3, 4, 5, 6];
// const selectedElm = arrElm.filter(even => even % 2 === 0);
// console.log(selectedElm);



//-----> find method
// const arrElm = [ 2, 3, 4];
// console.log(arrElm.find(n => n * n));
// console.log(arrElm.find(n => n % 2 === 1));

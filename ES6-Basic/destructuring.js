//-----> object destructuring --- object er khetre nam/property diye access kore ba alada kore.
const person = {
    name: 'billi',
    address: 'dhaka',
    occupation: 'student'
}
// const {name, address, occupation} = person;
// console.log(name);

// we can rename the properties name
// const {name: userName, address, occupation} = person;
// const {name = 'cat', address, occupation} = person;
// console.log(name);
// console.log(name);



//-----> Array Destructuring --- array er khetre position ba index value diye alada kore.
const arrElm = ['billi', 'code', 'hehe'];
const [one, two, three] = arrElm;
console.log(two);



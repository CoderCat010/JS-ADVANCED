//-----> object destructuring
const person = {
    name: 'billi',
    address: 'dhaka',
    occupation: 'student'
}
// const {name, address, occupation} = person;
// console.log(name);

// we can rename the properties name
const {name: userName, address, occupation} = person;
// console.log(name);
console.log(userName);


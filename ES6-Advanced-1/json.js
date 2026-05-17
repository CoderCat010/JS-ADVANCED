// convert object into json 
const obj = {
    name: 'billi',
    age: 1000,
    address: 'dhaka',
    contact: 19183838383982992 
}
// console.log(obj);

const convertIntoJson = JSON.stringify(obj);
const convertIntoObj = JSON.parse(convertIntoJson);
console.log(convertIntoJson);
console.log(convertIntoObj);



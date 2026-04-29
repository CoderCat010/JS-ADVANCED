// implicit return ----> এক লাইনে রিটার্ন - {} এবং return লিখতে হয় না
// const sum = (a, b) =>  a + b;
// console.log(sum(2, 3));


// explicit return ----> একাধিক লাইনের জন্য {} এবং return লাগবে
// const sum = (num1, num2, num3, num4) => {
//     const add = num1 + num2;
//     const multiply = num3 * num4;

//     return `result: ${add}, ${multiply}`;
// }
// console.log(sum(1, 2, 3, 4));


// object
// const getObjElm = (person) => person.age;
// console.log(getObjElm({name: 'anu', age: 30}));

// array
// const getArrElm = (element) => element[3];
// console.log(getArrElm([1, 2, 3, 4]));


const  addNum = (num1, num2 = 3) => num1 + num2;
console.log(addNum(2));


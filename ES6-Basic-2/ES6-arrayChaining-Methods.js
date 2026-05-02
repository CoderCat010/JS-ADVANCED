//-----> map method
const arrElm = [1, 2, 3, 4];

//---> regular function
// const a = arrElm.map(function(elm){
//     return elm * elm;
// })
// console.log(a);

//---> arrow function
// const a = arrElm.map(elm => elm * elm)
// console.log(a);

//---> arrow function + curly bracket
const a = arrElm.map(elm => {
    return elm * elm;
})

console.log(a);

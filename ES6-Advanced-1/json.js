// convert object into json 
const obj = {
    name: 'billi',
    age: 1000,
    address: 'dhaka',
    contact: 19183838383982992 
}
// console.log(obj);

// const convertIntoJson = JSON.stringify(obj);
// const convertIntoObj = JSON.parse(convertIntoJson);
// console.log(convertIntoJson);
// console.log(convertIntoObj);



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json));



const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}





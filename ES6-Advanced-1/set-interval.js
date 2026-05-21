let num = 0;
// const x = setInterval(() => {
//     console.log(num++);
// }, 3000);


const x = setInterval(() => {
    clearInterval(x);
    console.log(num++);
}, 3000);
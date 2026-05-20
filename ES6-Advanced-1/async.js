console.log(3);

setTimeout(() => {
    doSum();
}, 6000)
console.log(5);


function doSum(){
    console.log(2);
}
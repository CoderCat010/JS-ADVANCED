function addNum(nums){
    let numbers = nums;

    return function closureFunc(){
        return numbers
    }
}
let dang = addNum(5)
console.log(dang());

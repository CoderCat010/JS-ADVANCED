const car = {
    model: 'tesla auto',
    color: 'red',
    price: 60000
}

// console.log(car.model);
const {model: m, color, price} = car;
console.log(m, color, price);

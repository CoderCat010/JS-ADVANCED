// let user = { 
//     name: "Rahim", 
//     address: { 
//         city: "Dhaka" 
//     } 
// };
// console.log(user.address.city);


// let user = { 
//     name: "Rahim", 
//     address: { 
//         city: "Dhaka",
//         newAddress:{
//             newCity: 'madaripur', 
//             newAddress2:{
//                 newCity: 'dhaka',
//             }
//         }
//     } 
// };
// console.log(user.address.newAddress.newAddress2.newCity);


// let user = { 
//     name: "Rahim", 
//     address: { 
//         city: "Dhaka",
//         newAddress:{
//             newCity: 'madaripur', 
//             newAddress2:{
//                 newCity: 'dhaka'
//             }
//         }
//     } 
// };
// console.log(user?.address?.newAddress?.newAddress2);


let user = { 
    name: "Rahim", 
    address: { 
        city: "Dhaka",
        newAddress:{
            newCity: 'madaripur', 
            newAddress2:{
                newCity: 'dhaka'
            }
        }
    } 
};
console.log(user?.address?.newAddress?.newAddress2?.['newCity']);
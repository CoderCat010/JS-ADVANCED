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
// console.log(user?.address?.newAddress?.newAddress2?.['newCity']);


// const arrElm = [3, 4, 5, 77, 22, 5, 2];
// console.log(arrElm?.[3]);

let user = [{ 
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
}];
console.log(user[0].name);

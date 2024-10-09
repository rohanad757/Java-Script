// // // Shallow Copy : --- >
// let obj1 = {
//     name: "John",
//     age: 30,
//     address: {
//       city: "New York",
//       zip: 10001
//     }
//   };

//   let obj2 = Object.assign({}, obj1);           // // Shallow copy using Object.assign()
//   obj2.address.city = "Los Angeles";           // // Modify nested property in the copy
//   // Both obj1 and obj2 reflect the change in the nested object

//   console.log(obj1.address.city); // Output: "Los Angeles"
//   console.log(obj2.address.city); // Output: "Los Angeles"

// _________________________________________________________________________________________________________

// // Deep Copy : --- >
// let obj1 = {
//     name: "John",
//     age: 30,
//     address: {
//         city: "New York",
//         zip: 10001
//     }
// };

// Deep copy using JSON.parse(JSON.stringify())         // // JSON.parse(JSON.stringify(obj1)) is a common technique in JavaScript to create a deep copy of an object
// let obj2 = JSON.parse(JSON.stringify(obj1));            // // JSON.stringify(obj1): This converts the JavaScript object obj1 into a JSON string.
//                                                         // // JSON.parse(): This parses the JSON string back into a new JavaScript object.
// obj2.address.city = "Los Angeles";

// Only obj2 is affected; obj1 remains unchanged
// console.log(obj1.address.city); // Output: "New York"
// console.log(obj2.address.city); // Output: "Los Angeles"

// console.log(obj2);
// console.log(obj1);
// _______________________________________________________________________________________________
// // // Filter : --- >

// let arr = [1,2,3,4,5,6,7,8];

// // Finding Even : --- >
// const even = arr.filter((val) => {
//     // return val%2 === 0 ;        // // Short Method

//     // // using if else : --- >
//     if (val % 2 === 0) {
//         // return true;
//         // or
//         return val;
//     }
//     else{
//         // return false;
//         // or
//         return null;
//     }
// })
// console.log(even);
// _________________________________________________________________________________________________
// // Finding string in array : --- >
// let arr1 = [1,2,3,'Rohan',4,'Sneha',5,6];         
// let result = arr1.filter((val) => {
//     if (typeof(val) === 'string') {             // // In JavaScript, the type check for strings should use lowercase 'string', not 'String'
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(result);
// ___________________________________________________________________________________________________________
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 5]
// ];
// const filteredArray = nestedArray.filter((innerArray) => {
//     return innerArray.includes(5)
// });
// console.log(filteredArray);
// ____________________________________________________________________________________________________
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 5]
// ];
// const filteredArray = nestedArray.filter((innerArray) => {
//     const sum = innerArray.reduce((acc, num) => acc + num, 0);
//     return sum > 10;
// });
// console.log(filteredArray);
// ______________________________________________________________________________________________________
const users = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Los Angeles" },
    { name: "Charlie", age: 22, city: "Chicago" },
    { name: "David", age: 35, city: "New York" }
];
// // filter : --- >
// const filteredUsers = users.filter((user) => {
//     return user.city === "New York";
// })
// console.log(filteredUsers);

// // map : --- >
// const userNames = users.map((user) => {
//     return user.name;
// });
// console.log(userNames);

// // find : --- >
// const foundUser = users.find((user) => {
//     return user.age === 30
// });
// console.log(foundUser);

// // reduce : --- >
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge);



// _____________________________________________________________________________________________________
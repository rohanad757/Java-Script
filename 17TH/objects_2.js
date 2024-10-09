// Object Constructor / Singleton : --- >

// const tinder = new Object();    // //Singleton Object 
// const tinder = {};                 // //non-Singleton Object
// // //But both return the same an empty object
// tinder.name = "Rahul";
// tinder.id = "123abc";
// tinder.isloggedIn = false;
// console.log("tinder", tinder);
// console.log("keys", Object.keys(tinder));
// console.log("values", Object.values(tinder));

// const regularUser = {
//     email: "rohan@gmail.com",
//     fullName: {
//         firstName: "Rohan",
//         lastName: "Doddabasannavar",
//     }
// }
// console.log(regularUser);
// console.log(regularUser.fullName.firstName);

// COMBINING OBJECTS : ---- >

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { obj1, obj2 };
// console.log("obj4",obj4);              // //The problem with this is that there is an obj in an object just like we were fassing in arrays to overcome this we use assign

// const obj5 = Object.assign(obj1 , obj2);
// console.log("obj5 : ",obj5);          // //Using assign

// //Another way to do this : --- >
// const obj6 = { ...obj1, ...obj2 };
// console.log("Using spread", obj6);    // //Using spread

const manyObj = [
{
    name : "Rohan" ,
    id : 1234 ,
},
{
    name : "Sneha" ,
    id : 1234 ,
},
{
    name : "Ahalya" ,
    id : 1234 ,
},
{
    name : "Angawai" ,
    id : 1234 ,
}
]
// console.log(manyObj[0].name);
// console.log(Object.keys(manyObj));
// console.log(Object.values(manyObj));
// console.log(Object.entries(manyObj));
console.log(manyObj.hasOwnProperty('name'));
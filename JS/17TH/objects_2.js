// Object Constructor / Singleton : --- >

// const tinder = new Object();    //Singleton Object 
const tinder = {};                 //non-Singleton Object
// But both return the same an empty object
tinder.name = "Rahul";
tinder.id = "123abc";
tinder.isloggedIn = false;
console.log("tinder",tinder);
console.log("keys",Object.keys(tinder));             
console.log("values",Object.values(tinder)); 

const regularUser = {
    email : "rohan@gmail.com",
    fullName : {
        firstName :"Rohan",
        lastName : "Doddabasannavar",
    }
}
console.log(regularUser);
// console.log(regularUser.fullName.firstName);

// COMBINING OBJECTS : ---- >

const obj1 = {1 : "a",2:"b"}
const obj2 = {3 : "c",4:"d"}
// const obj3 = {obj1 , obj2};
// console.log("obj3",obj3);          //The probjem with this is that there is an obj in an object just like we were fassing in arrays to overcome this we use assign

// const obj3 = Object.assign(obj1 , obj2);
// console.log("obj3 : ",obj3);      //Using assign

// Another way to do this : --- >
const obj3 = {...obj1,...obj2};
console.log("Using spread",obj3);    //Using spread

// const manyObj = [
// {
//     name : Rohan , 
//     id : 1234 , 
// },
// {
//     name : Rohan , 
//     id : 1234 , 
// },
// {
//     name : Rohan , 
//     id : 1234 , 
// },
// {
//     name : Rohan , 
//     id : 1234 , 
// }
// ]
// manyObj[1].name
let obj = {
    name: "Rohan",
    age: 21,
    password: 1234,
}
// let obj1 = obj;
// obj.name = "Sneha";           // // Will change both 
// console.log(obj);
// console.log(obj1);

// _______________________________________________________________________________
// // Object Cloning : --- >

// // using spread Method : --- >
// let src = {...obj};
// src.name = "Sneha";
// console.log(obj);
// console.log(src);
// // using assign Operator : --- >
// let src = Object.assign({},obj);
// obj.name = "Sneha";
// console.log("obj : ",obj);                // // obj :  { name: 'Sneha', age: 21, password: 1234 }
// console.log("src : ",src);                // // src :  { name: 'Rohan', age: 21, password: 1234 }
// __________________________________________________________________________________________
// // Cloning two Objects in another Object : --- >

let obj1 = {
    name: "Rohan",
    age: 21,
    password: 1234,
}
let obj2 = {
    height : "176 ch",
    weight : 78
}
let src = Object.assign({},obj1,obj2);
console.log(src);
// __________________________________________________________________________________________
// // Cloning using iteration : --- >

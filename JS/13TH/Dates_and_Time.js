// Dates : ---- >
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
console.log(typeof myDate);   //Object

let MyCreatedDate = new Date(2023 , 0 , 23);   //Month starts from 0 in Js
let MyCreatedDate2 = new Date(2023 , 0 , 23 , 5 , 3);
let MyCreatedDate3 = new Date("2023-01-14");
let MyCreatedDate4 = new Date("01-14-2023");
console.log(MyCreatedDate.toDateString());
console.log(MyCreatedDate2.toLocaleString());
console.log(MyCreatedDate2.toLocaleDateString());
console.log(MyCreatedDate3.toDateString());
console.log(MyCreatedDate4.toDateString());

let MyTimeStamp = Date.now();
console.log(MyTimeStamp);
console.log(MyCreatedDate4.getTime());
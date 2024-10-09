// 7Types of Data Types: 
// PREMETIVE : ------->  String , Number , Boolean , null , undefined , Symbol , Bigint
const score = 100;   //number
const scorevalue = 100.3;  //still a number
const isLoggedIn = false;  //Boolean
const outsideTemp = null;  // null -- >  empty
let userEmail;    //Undefined --- > need to be given/defined
console.log("Type of Score(Number):",typeof score);
console.log("Type of isLoggedIn(Boolean):",typeof isLoggedIn);
console.log("Type of outsideTemp(Null):",typeof outsideTemp);
console.log("Type of userEmail(Undefined):",typeof userEmail);

const bigNumber = 45759537932929578n;    //n -- > used to represent big numbers
const id = Symbol('123');  //string 
const anotherId = Symbol('123'); 
console.log(id === anotherId);   //hence the value written in the symbol's dataype are always different / not same
const str = 'Rohan'
console.log("Type of id(symbol):",typeof id);
console.log("Type of str(string):",typeof str);
console.log("Type of nigNumber(n):", typeof bigNumber);

// NON-PREMITIVE --------> array , object , functions
const name = ["Sneha" , "Rohan" , "Ahalya" ];   //Array

let obj = {
    name : "Rohan",
    age:20,
}   //Object
console.log("Type of obj:",typeof obj);

function myfunc(){
    console.log("Hello world");
}  //Function
console.log("Type of myFunc:",typeof myfunc);
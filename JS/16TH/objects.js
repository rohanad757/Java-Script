//We can declare the object in three ways in litteral and constructor and singleton
//OBJECT LITTERAL : ----- >
const mySym = Symbol("Key1");
const user = {
    name : "Rohan" ,
    roll_no : 3 ,
    age : 20 ,
    [mySym] : "key1", 
}
console.log(user.name);                         //Not a good Practice 
console.log(user["name"]);                      //Good Practice
console.log(user.my_Sym);                       //Not a good Practice, it will give string as a type
console.log(user[mySym]);                      //It will give Symbol as a type 
user.name = "Sneha";
console.log("Changed",user);
// Object.freeze(user)
//now after giving freez we cant make changes anymore
user.name = "Rohan";
console.log("will not change",user);
// // using objects with functions : --- >
user.greeting = function() {
    console.log("Hello world");
    console.log(`The name of student is ${this.name} and his roll_no is ${this.roll_no}`);
}
console.log(user.greeting());      
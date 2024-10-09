const name = "Rohan";
const repoCount = 50;
// console.log(name + repoCount + "value");   //not a good Practice

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //Good Practice 

//Another way to define a string :-- >
const gameName = new String("Call of Duty");
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName.length);

console.log(gameName.__protp__);  //Syntax of Finding Prototype
//Ex of Prototype: --- >
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,4);
console.log("Substring:",newString);  ////In substring we cant give in -ve 

const anotherString = gameName.slice(-10,4);
console.log("slice:",anotherString);   //In slice we can give in -ve 

const newStringone = "     Rohan      ";
console.log("Trim:",newStringone.trim());

const url = "https://rohan.com/rohan%20kuchbhiiii";
console.log("Replace:",url.replace('%20' , '%replace'));   //To replace

const spl = "yehh-dill-mangee-mor";
console.log("split:",spl.split('-'));    //It splits
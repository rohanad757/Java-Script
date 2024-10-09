//WHILE : ---- >
// let i = 0;
// while (i <= 10) {
//     console.log(`The value of i is ${i}`);
//     i = i+2;              //Writing this is important or else the loop will run infinitely
// } 

let myArr = ["SHIVA","VISHNU","Rohan","Ron"];
let i = 0;
while (i< myArr.length) {
    console.log(`Value is ${myArr[i]}`);
    i=i+1                   //Writing this is important or else the loop will run infinitely
}
// do-while --- >
let score = 1;
do {
    console.log(`The score is ${score}`);
    score++                 //Writing this is important or else the loop will run infinitely
} while (score <= 10);
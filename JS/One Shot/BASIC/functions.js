// function calling() {
//     console.log("Hello world");
//     console.log("Kya baat h");
// }
// calling();
// // //++++++++++++++_______________+++++++++++++++++
// function inp(msg, n) {
//     console.log(msg);  //msg-Parameter
// }
// inp("This is how we give input");  //Argument
// // //++++++++++++++++_______________++++++++++++++++
// function sum(a, b) {
//     console.log(a + b);
// }
// sum(2, 2);
// // //+++++++++++++++_____________++++++++++++++++
// function sum1(a, b) {
//     s = a + b;
//     return s
// }
// let val = sum1(3, 4);
// console.log(val);
// // //++++++++++++++++_______________++++++++++++++++++
// // //ARROW FUNCTIONS : --- >
// const arrowSum = (a, b) => {
//     console.log(a * b);
// }
// arrowSum(2, 10);
// // // ++++++++_________++++++++++
// const arrowSum1 = (a, b) => {
//     return a * b;
// }
// let val1 = arrowSum1(10, 10);
// console.log(val1);
// // //++++++++++++__________+++++++++++++++
// // //Return a vowel by taking the input as string : --- >
// function countVowel(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }
// let v = countVowel("rohan");
// console.log(v);
// ++++++++++++++____________+++++++++++++
// forEach loop in Arrays : --- >
//for each can only be used with arrays or strings, and in forEach loop we can pass a function in the place of parameter itself and iterates thro every element.
// let arr=[1,2,3,4,5,6];
// arr.forEach(function printVal(val){
//     console.log(val);
// });
// ++++++++++_________+++++++++++
//let arr1=["rohan","sneha","ahalya"];
// //we can give three types of input parameters : value , index , array itself.
//arr1.forEach((val,index,array) => { 
//    console.log(val,index,array);
//});
// //this forEach loop is a higher order function , a higher order funcrion is a function in which we can give an function itself as a parameter
// +++++++++++++++++___________+++++++++++++++++

// calculating square : ---- >
// let val3=[2,4,6,8];
// val3.forEach((val3) => {
//     console.log(val3 * val3);
// });
// val3.forEach();
// +++++++++++_________+++++++++++++++

// //MAP : --- > It is simillar of forEach , the only difference is map creates a new array with the result whereas forEach does not create a new array.
// let num = [2,3,4,5,6];
// let newArray = num.map((num)=>{
//     return num;
// });
// //Forms a new array
// console.log(newArray);
// // basically forEach is used wehen we need to perform some calculations out of array , whereas map is is used when we need an entire saperate array as a result.
// +++++++++++++++_____________++++++++++++++++

// // FILTER METHOD IN ARRAY : --- >It iterates each and every element in an array and and filters a certain element based on condition.
// let arr=[1,2,3,4,5,7,8];
// let result=arr.filter((arr)=>{
//     return arr%2===0;
// });
// console.log(result);  // //Filtered element
// //++++++++++++++_______________+++++++++++++++++

// //REDUCED METHOD IN ARRAY : --- >It performs some operation and reduces the array to a single value . It returns that single value.
// let arr=[1,2,3,4];
// // // here-> res=1 , current=2 --->  res=3->(1+2)
// const out = arr.reduce((res,current)=>{
//     return res+current;
//  });
//  console.log(out);
// +++++++++++++++++_________++++++++++++
// // Largest value :--- >
// let arr=[1,2,3,4,5,6,7,8];
// const output=arr.reduce((res,curr)=>{
//     return res>curr ? res : curr;
// });
// console.log(output);
// +++++++++++++++___________++++++++++++++++++
// // Q)We are given array of marks of student.Filter out of the marks of student that scored 90+.

// let marks=[40,50,60,91,99,82,96,100];
// const out=marks.filter((val)=>{
//     return val>90;
// });
// console.log(out);
// //++++++++++++++__________________++++++++++++++++++

// // Q) Take a number n as input from user.Create an array of numbers from 1 to n.Use the reduce method to calculate sum of all numbers in the array.Use the reduce method to calculate product of all the numbers in the array.
let n=prompt("Enter a number");
let arr=[];
for (let i = 0; i <= n; i++) {
    arr[i-1]=i;
}
console.log(arr);
const sum = arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("sum:",sum);
const product = arr.reduce((res,curr)=>{
    return res*curr
});
console.log("Product:",product);
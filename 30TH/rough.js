// const myArr = ["Rohan","Naruto","Ahalya","Sasuke"];
// myArr.forEach((val)=>{
//     // console.log(val);  
//     // return val;         // // One flaw of forEach is it cant reaturn
// })
// ________________________________________________________
// const num = [1,2,3,4,5,6,7,8,9,10];
// num.forEach((val)=>{
//     if(val>4){
//         // console.log(val);
//     }
// })
// __________________________________________________________
// const num = [1,2,3,4,5,6,7,8,9,10];
// let res = num.forEach((val)=>val>4)
// console.log(res);           // // undefine since forEach cant return 
// __________________________________________________________
// const num = [1,2,3,4,5,6,7,8,9,10];
// let res = num.filter((val)=>val>4)
// console.log(res);         // // It gives output in Array
// __________________________________________________
// const num = [1,2,3,4,5,6,7,8,9,10];
// num.filter((val)=>{
//     if (val>4) {
//         console.log(val);          // // It doesnt give output in Array
//     }
// })
// _____________________________________________________
const num = [1,2,3,4,5,6,7,8,9,10];
let res = num.filter((val)=>{
    return val>4;                      // // Need to use return if writing like this
})
console.log(res);
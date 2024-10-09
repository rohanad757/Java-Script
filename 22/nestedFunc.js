// function one() {
//     const username = "rohanad757"
//     function two() {
//         const web = "youtube";
//         console.log(username);
//     }
//     // console.log(web);  // // Will throw error since it is out of scope.
//     two()
// }
// one();
// ++++++++++++++++++++++++
// if(true){
//     const username = "rohan";
//     if(username === "rohan"){
//         const web = "rohan";
//         console.log(username+web);   
//     }
    // console.log(web);   // // will throw error
// }
// console.log(username);  // throw error 
// ++++++++++++++++++++++++++++++++++++
// console.log(one(5));      // Can pe placed above
// function one(num){
//     return num + 1;
// }


console.log(funcTwo(4));   // error : -> cant place it above function sice it is stored in variable
const funcTwo =function (num){
    return num + 2;
}
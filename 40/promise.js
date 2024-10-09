// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Async Task is Compleate");
//         resolve();       // // It connects the resolve and .then
//     },3000);
// });
// promise1.then(function(){
//     console.log("Promise Consumed");
// })
// __________________________________________________
// let promise2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Async Task is Completed");
//         resolve();
//     }, 3000);
// }).then(function(){
//     console.log("Promise Confirmed");
// })
// ___________________________________________________
// let promise3 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve({ username: "rohanad", email: "rohanad@gmail.com", age: "21" })
//     }, 3000); 
// })
// promise3.then(function(user){
//     console.log(user);
// })
// _______________________________________________________
// const promise4 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ username: "rohanad", password: "1234" })
//         }
//         else {
//             reject("Eroor Something went wrong")
//         }
//     }, 4000);
// })
// let res = promise4.then(function (user) {
//     console.log("Data: ", user);
//     return user.username;
// }).then(function (username){
//     console.log(username);
// }).catch(function (err) {
//     console.log("Failed: ", err);
// }).finally(()=>{
//     console.log("The Promised is either Resolved or Rejected");
// })
// console.log(res);

// _______________________________________________________________________
// const promise5 = new Promise((resolve, reject) => {
//     let error = true;
//     if (!error) {
//         resolve({ username: "rohanad", password: "1234" })
//     }
//     else {
//         console.log("Something went Wrong");
//     }
// })
// async function consumePromise5() {
//     const response = await promise5;
//     console.log(response);
// }
// consumePromise5();
// _________________________________________________________________
const promise5 = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
        resolve({ username: "rohanad", password: "1234" })
    }
    else {
        console.log("Something went Wrong");
    }
})
async function consumePromise5() {
    try {
        const response = await promise5;
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
consumePromise5();
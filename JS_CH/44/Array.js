// // Array Literal : --- >
// let arr = [1,'Rohan',2];
// // // console.log(arr)
// console.log("Literal : ",typeof(arr));

// // // Array Constructor : --- >
// let arr1 = new Array(1,"Rohan",2);
// console.log("Constructor",typeof(arr1));

// ________________________________________________________________ Methods : --- >

// let array = [1,2,3,4,5];
// array.push(6);                       // // push
// console.log("push(6) : ",array);
// array.pop();                        // // pop
// console.log("pop() : ",array);
// array.unshift(0);                   // // unshift
// console.log("unshift(0) : ",array);
// array.shift();                      // // shift
// console.log("shift : ",array);

// console.log(array.slice(1,3));     // // slice

// array.splice(1,3,"Rohan");         // // splice
// array.splice(0,0,"Rohan");          
// array.splice(1,0,"Rohan");
// array.splice(1,1,"Rohan");           // // Remove using splice and inseting at that place
// array.splice(2,2,"Rohan");          // // Remove usinf splice and inseting at that place
// console.log("splice : ",array);

// _________________________________________________________________________ Arrays with Functions : --- >
// let arr = [10, 20, 30, 40, 50];
// function sum(arr) {
//     let len = arr.length;
//     let sum = 0;
//     for (let i = 0; i < len; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// let totalSum = sum(arr);
// console.log(totalSum);'
// _________________________________________
// let arr = [10, 20, 30, 40, 50];
// let sum = 0 ;
// arr.forEach((val) => {
//     sum = sum + val ;
// })
// console.log(sum);


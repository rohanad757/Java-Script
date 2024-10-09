// // One way : --- >The sort() method in JavaScript takes a comparison function that defines how two elements should be compared to
// // determine their order in the sorted array

// let arr = [4,2,6,8,7,5,1,3];
// arr.sort();
// console.log(arr);
// _____________________________________________________________
// // 2nd Method : --- > ascending
let numbers = [34, 7, 23, 32, 5, 62];
let ans = numbers.sort((a,b)=>{
    return a-b;
})
console.log("Ascending Sorting : ",ans);
// // Decending : --- >
let res = numbers.sort((a,b) => {
    return b-a ;
})
console.log("descending Sorting : ",res);

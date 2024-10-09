// // find method in JavaScript returns only the first value that satisfies the provided testing function
const numbers = [5, 6, 9, 16, 25];
let res = numbers.find((val) => {
    let ans = Math.sqrt(val) % 1 === 0;
    return ans;
})
console.log(res);
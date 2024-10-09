// // Imp --- > forEach method doesn't return a new array hence we cant store it in a variable or return anyting from it , whereas map let us stor it in a variable and return it
let arr = [1,2,3,4,5,6];
arr.forEach((val , index) => {
    console.log(`Index : ${index} , Value : ${val}`);
})
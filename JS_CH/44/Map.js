// MAP : --- >

let arr = [1,2,3,4,5,6,7,8];

// Finding value and index of Array using map
arr.map((val , index)=>{
    console.log(`index : ${index} , value : ${val}`);
})
// Finding square using map : --- >
let square = arr.map((val) => {
    return val * val ;                 // // If we return the map returns in an array
})
console.log(square);
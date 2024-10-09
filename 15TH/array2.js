Arr1 = ["Iron_man","Spider_man","Bruce_wayne"];
Arr2 = ["Deadpool","Thanos","Shaktiman","Ant_man"];

Arr1.push(Arr2);
console.log("push: ",Arr1);           //The problem with merging two array like this is that the array comes inside an array to solve this we use CONCAR

const con = Arr1.concat(Arr2)
console.log("concat: ",con);         //CONCAT()

const con2 = [...Arr1,...Arr2]       // SPREAD() : --- > The function of concat and spread is same at merges the two array into one.
console.log("con2",con2);                            //This can also be done throuh spread (...)

const Arr3 = [1,2,3,[4,5],6,[7,8,[1,2,3],12],13]
console.log(Arr3.flat(Infinity));                    //FLAT(depth)

console.log("from:",Array.from("Rohan"));
console.log("isarray:",Array.isArray([1,2,3,4]));
console.log("isarray:",Array.isArray("Rohan"));
console.log("from:",Array.from({name : "Rohan"}));   //Empty array

let a =100;
let b =200;
let c=300;
console.log(Array.of(a,b,c));                         //array.of  : ---> it is similar of from().
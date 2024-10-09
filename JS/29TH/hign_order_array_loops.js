//For-Off Loop : --- >

// const Arr = [1,2,3,4,5,6];
// for (const i of Arr) {
//     console.log(i);
// }

// const Greet = "Hello World";
// for (const i of Greet) {
//     console.log(`Each cahracter is ${i}`);
// }
// +++++++++++++__________++++++++++++
// const Greet1 = "Hello World";
// for (const i of Greet) {
//     if (i==' ') {
//         break;
//     }
//     console.log(`Each cahracter is ${i}`);
// }
// ++++++++++++++++++++++++++++++++++++++___________________________________+++++++++++++++++++++++++++++++++++++

// MAPS : ----- >

// const map = new Map()
// map.set('In' , "India")
// map.set('USA' , "United States of America")
// map.set('CIN' , "China")
// map.set('AUS' , "Australia")
// console.log(map);

//For-of loop on Map : --- >
// const map1 = new Map();
// map1.set('In' , "India")
// map1.set('USA' , "United States of America")
// map1.set('CIN' , "China")
// map1.set('AUS' , "Australia")
// for (const [ keys, values] of map1) {
//     // console.log(`${keys} - > ${values}`);
// }

//For-of loop on Object : --- >

// const myObj = {
//     'game1' : "NFS",
//     'game2' : "Spiderman",
//     'game3' : "COD",
// }

// for (const i of myObj) {
//     // console.log(i);           //Will give myObj is not Iterable , we can apply for-of on object 
// }
// ++++++++++++++++++++++++++++++++++++++++++++____________________________________________+++++++++++++++++++++++++++++++++++++++++++

//For-in Loop : --- >

// const myObj1 = {
//     game1 : "NFS",
//     game2 : "Spiderman",
//     game3 : "COD",
// }
// for (const key in myObj1) {
    // console.log(key);
    // console.log(myObj1[key]);
    // console.log(`${key} - > ${values}`);    //Cant eccess values like this hence ,
    // console.log(`${key} - > ${myObj1[key]}`);
// }

// const prog = ["JS","PYTHON","C++","HTML"];
// for (const key in prog) {
    // console.log(key);      //Here in the for-in in array for key it will give the index
// }
//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++___________________________++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//For-each Loop : --- >

// const code = ["JS","PYTHON","C++","HTML"];
// code.forEach(function (val) {
    // console.log(val);
// });
// ++++++++++++++++++++++++++++
// code.forEach(val => {
//     console.log(val);
// });
// +++++++++_++++++++++++
// const code1 = ["JS","PYTHON","C++","HTML"];
// code1.forEach((item , index , code1) => {
    // console.log(item , index , code1);
// });
// +++++++++++++++++++++++++______________+++++++++++++++++++
// const myCoding = [
//     {
//         language : "Java Scrips",
//         sc : "JS",
//     },
//     {
//         language : "Python",
//         sc : "Py",
//     },
//     {
//         language : "Java",
//         sc : "Jv",
//     },
// ];

// myCoding.forEach((item) => {
//     // console.log(item.sc);
//     // console.log(item.language);
//     // console.log(`${item.language} - > ${item.sc}`);
// });
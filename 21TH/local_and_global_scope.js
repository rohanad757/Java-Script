var c= 300;    //Global scope
if (true) {    //block scope
    let a=2;
    const b=4;
    var c=5;
}
//run these one by one
// console.log(a);  
// console.log(b);
console.log(c);     //The reason to not use var
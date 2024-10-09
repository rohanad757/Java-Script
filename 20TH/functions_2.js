function number(...num1){   //... jab pata na ho kitna num ana walaen h
    return num1;
}
// console.log(number(200,300,300));   // // This will return all the values in an array.

function number1(val1 , val2, ...num2){
    return val1,val2,num2;   
} 
console.log("num1",number1(200,300,400 ,500 ,600 ,700));        // // Here val1 and val2 will go as it is but the rest will return in an array in num2.
 
const obj = {
    name : "Rohan",
    id : 123,
}
function username(any){
    return `The username is ${any.name} and his id number is ${any.id}`;
}
console.log(username(obj));

const array1 = [200,300,400,500];
function user(getarray){
    return getarray[2];
}
console.log(user(array1));
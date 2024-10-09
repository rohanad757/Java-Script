function number(...num1){
    return num1;
}
// console.log(number(200,300,300));  

function number1(val1 , val2, ...num2){
    return val1,val2,num2;
} 
console.log("num1",number1(200,300,400 ,500 ,600 ,700));

const obj = {
    name : "Rohan",
    id : 123,
}
function username(anyobject){
    return `The username is ${anyobject.name} and his id number is ${anyobject.id}`;
}
console.log(username(obj));

const array1 = [200,300,400,500];
function user(getarray){
    return getarray[2];
}
console.log(user(array1));
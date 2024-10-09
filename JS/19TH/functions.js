function name() {
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("N");
}
name()
function addition(num1 , num2 ) {   
    console.log(num1 + num2);
}
addition(3,4)      //It will just print

function add(number1 , number2){
    let result = number1 + number2;
    return result
}
const result = add(3,3)
console.log("Result",result);     //This is how it actually gives to result

function logginUsername(username){
    if (username === undefined) {
        console.log("Invalid username");
        return;
    }
    return `${username} just logged in`;
}
console.log(logginUsername("Rohan"));
// +++++++++++++++ Another way +++++++++++++++++++
const username = "Rohan";
function logginUsername(){
    return `${username} just logged In`
}
console.log(logginUsername());
// ++++++++++++++++++---------++++++++++++++++++
function add1(num1 , num2 ){
    console.log(`${num1} + ${num2} =`,num1 + num2);
}
add1(6,3);
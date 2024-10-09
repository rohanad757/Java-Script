//Stack memory is used in Premetive data Type
//Heap memory is used in Non-Premetive data type
//Stack Memory : ----->
let firstNme = "Rahul";
let secondName = "Ankit";
secondName = "Shubham";
console.log(firstNme);
console.log(secondName)

//Heap Memory : ----> 
let userone = {
    email : "ronnn@gmail.com",
    upi : "ron@okaxis"
}
let usertwo = userone;
usertwo.email = "kuchbhiii@gmail.com";

console.log(userone);
console.log(usertwo);
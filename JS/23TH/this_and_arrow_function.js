const obj = {
    username :"Rohan",
    id :12,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to VScode`);
        console.log(this);
    }
}
// obj.welcomeMessage()
// obj.username = "Sam";
// obj.welcomeMessage()
// console.log(this);         //Empty current context , but if we run it in chrome cmd promt it will return window object

// function chai(){
//     console.log(this);
//     console.log(this.username);     //  Won't give since it username is not in current context
// }
// chai()                    //It imlies that there if smtg in this , if we write it in function

function chai1(){
    let username = "Rohan";
    console.log(this.username);
}
chai1()        //Even this is not returning "this"....
// ARROW FUNCTION : ---- >
const chai2 = () => {
    let username = "Rohan";
    console.log(this.username);
}
chai2()    //Still undefine in this too , hence we cant use this in a function 

const addtwo = (num1 , num2) => {
    return num1 + num2;
}
console.log(addtwo(2,2));

const addnum = (num1 , num2) =>  (num1 + num2)
console.log(addnum(2,2));
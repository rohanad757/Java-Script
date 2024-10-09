// for-in : --- > iteratable over Object
let obj = {
    name : "Rohan",
    age : 21,
    height : "176 cm"
}
for (let key in obj) {
    console.log(key,obj[key]);
}
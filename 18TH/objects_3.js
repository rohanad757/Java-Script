const cource = {
    name : "rohan",
    id : 1234 ,
    rollNo : 3 ,
}
// console.log(cource.id);   //Not a good practice 

const {name:nam} = cource
// console.log(name);
console.log(nam);
const navbar = ({company}) => {

}
navbar(company='Rohan');
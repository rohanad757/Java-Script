class info {
    age;
    height = "176 ch"
    name = "Rohan";
    #password = 12345678;

    constructor(newAge , newHeight , newName) {
        this.age = newAge;                 // // setting up a public variable
        this.height = newHeight;          // // Changing a public variable
        this.name = newName ; 
    }
    get fetch() {
        return this.#password;
    }
    set setter(val) {
        this.#password = val;
    }
}

let obj = new info(21 , 170 , "Sneha");
console.log(obj.age);
console.log(obj.height);
console.log(obj.name);
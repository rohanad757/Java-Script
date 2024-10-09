class house {
    name = "Rohan";
    age = 18;
    height = "176 cm"
    #password = 123456;                  // // Private
    key;

    const

    #greet() {
        console.log("Hello World", this.#password);    // // private members can be accessed within the class but not outside it
    }
    running() {
        console.log("Go for a Run");
    }
    // // getter : --- >
    get grett(){
        return this.#greet();
    }
    set setGrettt(val){
        this.#greet() = val ;
    }
    get getPassword() {
        return this.#password;
    }
    // // setter : --- >
    set setPassword(val) {
        this.#password = val;
    }
}
let obj = new house();
// console.log(obj.name);
// console.log(obj.#password);           // // error
// obj.greet();                                        // // private members can be accessed within the class but not outside it
// console.log(obj.getPassword);           // // getter 

// obj.setPassword = 6 ;
// console.log(obj.getPassword);

console.log(obj.grett);                   // // Accessing a private function
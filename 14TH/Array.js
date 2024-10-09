const Arr = [3 , 4 , 2 , 6 , 8];
console.log(Arr[0]);
console.log(Arr[1]);
const kuchbhi = ["Rohan" , "Angawai" , "Snesha" , "Ahalya"]
console.log(kuchbhi[0]);
//Even array has got PROTOTYPE properties , can access them in chrome 

//ARRAY METHODS : ---- >
Arr.push(6)                                //PUSH
console.log(Arr);
Arr.pop()                                  //POP
console.log(Arr);
Arr.unshift(9);
console.log(Arr);                          //UNSHIFT : --->  Push in beggining
Arr.shift();
console.log(Arr)                           //SHIFT : --- > Remove that pushed at beggining
console.log("Includes",Arr.includes(8));   //Includes() : --- > returns in bool (true or faslse)
console.log("Indexof",Arr.indexOf(8));     //indexof() : --- > returns the index of the element given
console.log("Indexof",Arr.indexOf(9));
// ----------
console.log("A",Arr);
const myn1 = Arr.slice(1,3);    //Slice : --- > Includes 1,2 but not 3.
console.log("myn1:",myn1);

console.log("B",Arr);
const myn2 = Arr.splice(1,3);   //Splice : --- > It returns the number at index 1,2,3 and also remove these numbers from original array
console.log("myn2:",myn2);

console.log("C",Arr);           //hence from the output of this , we can say that the "splice" not print the value(given range)  but eventually takes then out of the erray and that is why in C the Arr(1,3) is not showing

// -----------------------------------------------------------------
const newArr = Arr.join();    // It converts the datatype from object to tring
console.log("New Array:",newArr);
console.log(typeof newArr);
// -----------------------------------------------------------------
//Refer comand pallet for more such PROTOTYPES
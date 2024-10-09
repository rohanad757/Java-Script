// // try catch : --- >
try {
    console.log("Try block starts here");
    console.log(x);                                  // // since the error has occured it move to the catch block
    console.log("Try block ends here");              // // This will not run since error has already occured
} catch (err) {
    console.log("This is catch block");
    // console.log(err);
}
finally {
    console.log("I will run everytime , as i am final block");
}
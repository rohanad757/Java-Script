console.log("Rohan");

debugger;
function getData(num , nextData){
    setTimeout(() => {
        console.log(num);
        if (nextData) {
            nextData();
        }
    }, 2000);
}
getData(1 , () => {
    getData(2 , () => {
        getData(3);
    })
})

console.log("ABCD");
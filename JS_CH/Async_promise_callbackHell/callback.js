// function sum(a , b) {
//     console.log(a + b);
// }
// function callBack(a , b , callSum){
//     callSum(a,b);
// }
// callBack(2,2,sum);
// __________________________________________________
// function getData(num) {
//     setTimeout(() => {
//         console.log(num);
//     },2000)
// }
// getData(1);
// getData(2);
// getData(3);
// getData(4);
// __________________________________________________
debugger;
function getData(data, nextData) {             // // nextData is tricky here
    setTimeout(() => {
        console.log(data);
        if (nextData) {
            nextData();
        }
    }, 2000);
}
// // callback Hell : --- >
getData(1, () => {             // // using callback here will ensure that it wont immediately invoke the function
    getData(2,() => {
        getData(3);
    });
});
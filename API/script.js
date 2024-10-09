let url = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector(".fact");
const btn = document.querySelector(".btn");
// let promise = fetch(url);
// console.log(promise);


// // using async await : --- >
// let getFact = async () => {
//     console.log("Getting Data ... ");
//     let response = await fetch(url);
//     console.log("respo",response);
//     let data = await response.json();         // // This convert the json data into object
//     console.log("data",data[0].text);
//     factPara.innerText = data[0].text; 
// }


// // using promises (then and catch)
function getFact() {
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data[0]);
        factPara.innerText = data[0].text;
    })
}

btn.addEventListener("click", getFact)
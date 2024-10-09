const parent = document.querySelector(".PARENT")
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML);
//Using for Loop : --- >
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML); 
}
parent.children[1].style.color = 'red';
// First and Last Element Child : --- >
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const oneDay = document.querySelector(".DAY")
console.log(oneDay);
// Parent Element : --- >
console.log(oneDay.parentElement);
//childNodes : --- >
console.log("Nodes :" , parent.childNodes);
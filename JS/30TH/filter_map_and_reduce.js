const Arr = [1,2,3,4,5,6,7,8,9,10];
const data=Arr.filter((val) => {
    return val > 4;
})
// console.log(data);

const Arr1 = [1,2,3,4,5,6,7,8,9,10];
const newNum = [];
Arr1.forEach((val) => {
    if (val > 4) {
        newNum.push(val)
    }
    // console.log(newNum);
});
// +++++++++++++++++++++++++++++++++++______________________+++++++++++++++++++++++++++++

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// one way : -- >
//   const userBook = books.filter((val) =>{
//     const res = val.genre === 'History';
//     return res
//   })
//   console.log(userBook);

//Another way : --- >
// const userBook = books.filter((val)=>(val.genre == 'History'));
// console.log(userBook);

//Filtering those which have printed after 2000 : --- >
const userBook = books.filter((val)=> val.publish >= '2000')
// console.log(userBook);

const userBook1 = books.filter((val)=> {return val.publish >= '2000'})   //If opened the scope have enough courage to write return on the code
// console.log(userBook);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++________________________________+++++++++++++++++++++++++++++++++++++++++++++++

// const alley = [1,2,3,4,5,6,7,8,9,10]
// const newNumb = alley.map((val) => val + 10);
// console.log(newNumb);
// +++++++++++++++_____________+++++++++++++++
const alley1 = [1,2,3,4,5,6,7,8,9,10]
const newNumber = alley1
                        .map((val) => val *10)
                        // .map((val) => val + 1)
                        // .filter((val) => val >=40);
                        console.log(newNumber);

                        
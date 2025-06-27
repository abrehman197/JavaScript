//Filter and Mapping

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     num > 5
// }); Error must write return or use this --> ( (num) => num > 5)

// const newNums = myNums.filter( (num) => {
//    return num > 5
// });
// console.log(newNums);

// const newNum = []
// myNums.forEach( (num) => {
//     if (num > 5) {
//         newNum.push(num)
//     }
// })
// console.log(newNum);

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

// const userBooks = books.filter( (item) => item.genre == 'History')
// let userBooks = books.filter( (bk) => {
//     return bk.publish >= 1995 && bk.genre === 'History'
// });
// console.log(userBooks);

//Mapping

// const nums = [1, 2, 3, 4, 5]
// // const newNums = nums.map( (num) => num + 10)
// const newNums = nums
//                     .map( (num) => num + 10)
//                     .map( (num) => num * 2)
//                     .filter( (num) => num > 25)
// console.log(newNums);


//Reduce --> Accumlator holds the recent value of array
// const myNums = [1, 2, 3]
// //acc given value se start hoga then phr array ki or acc ki value sum hogi 
// const newNum = myNums.reduce( function (acc, val){  
//     console.log(acc);
//     return acc + val
// }, 3)

// const newNum =  myNums.reduce( (acc, val) => acc + val, 0)
// console.log(newNum);

const courses =[
    {
        name: "JS",
        price: 1000
    },
    {
        name: "C++",
        price: 350
    },
    {
        name: "JAVA",
        price: 500
    }
]

const totalBill = courses.reduce( (acc, val) => acc+val.price, 0)
console.log(totalBill);
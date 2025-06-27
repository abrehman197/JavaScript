// Loops -->  iteration --> Iterators

// For Loop

// const array = [1,3,4,6,8,2]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element == 6){
//         console.log("6 is Fund!");
//     }
//     console.log(element);
// }

// Continue // Break


// While Loop

// let i = 1

// while (i <= 10) {
//     console.log(i);
//     i++;    
// }


// Do While

// let score = 1
// do{
//     console.log(`Score: ${score}`);
//     score++;    
// }while (score > 10);

// For of

// const arr = [1, 2, 3, 5, 6]
// for (const i of arr) {
//     console.log(i);
// }

// const str = "Hello World"
// for (const i of str) {
//     console.log(i);
// }

// Maps ---> for unique values not repeat 
// const map = new Map()
// map.set('PK', "Pakistan")
// map.set('USA', "America")
// map.set('IN', "India")
// map.set('IN', "India")
// // console.log(map);

// //Array de-structure, 
// for (const [key, value] of map) { // Objects are not iterable by this loop
//     console.log(key, ":-", value); 
// } 


// const myObj = {
//     PK: "Pakistan",
//     IN: "Indian",
//     USA: "America"
// }

//For IN
// for (const key in myObj) {
//     console.log(`${key} :- ${myObj[key]}`);
// }

//For in not for map nothing will print

// const arr = ["JS", "HTML", "CSS", "PHP"]
// for (const key in arr) {
//     console.log(arr[key]);
// }


//For each
const code = ["JS", "JAVA", "HTML", "C++"]
// code.forEach( function (i) {
//     console.log(i);
// });

// code.forEach( (val) => {
//     console.log(val);
// });

// function print(item) {
//     console.log(item);
// }

// code.forEach(print)

// code.forEach( (val, ind, arr) => {
//     console.log(val, ind, arr);
// });

// const objArr = [
//     {
//         name: "Ali",
//         age: 18
//     },
//     {
//         name: "Aoun",
//         age: 20
//     },
//     {
//         name: "Ahmad",
//         age: 19
//     },
//     {
//         name: "Bilal",
//         age: 22
//     }
// ]

// objArr.forEach( (item) => {
//     if (item.age < 20) {
//         console.log(item.name);
//     }
// })

//For each does not return anything
// function sayName(){
//     console.log("Abdul Rehman")
// }

// sayName   <--- Reference     sayName()   <--- execution

// sayName()

// function addNum(n1, n2){ //Parameters
//     console.log(n1 + n2);
// }

// addNum(3,11) //arguments

// function addNum(n1, n2){
//     return n1 + n2
//     // console.log("Hello"); Function doesn't work after a return statement
// }

// const res = addNum(3,11)
// console.log("Result:", res);

function loginUser(username = "DEFAULT_VALUE"){
    return `${username} just logged in!`
}
//console.log(loginUser("abdulrehman")); //function has return statement of string
//console.log(loginUser()); undefined

// function cartPrice(...n1){ //rest operator just like spread
//     return n1
// }

// console.log(cartPrice(2, 3, 4, 5));

// const users = {
//     name: "Abdul Rehman",
//     age: 21
// }

// function handleObj(anyObj) {
//     console.log(`${anyObj.name} is ${anyObj.age} years old.`);
// }
// // handleObj(users)
// handleObj({
//     name: "Ahmad Ali",
//     age: 20
// })

const newArr = [1, 11, 22, 33, 44]

function getSecondValue(anyArr){
    return anyArr[1]
}

// console.log(getSecondValue(newArr))
// console.log(getSecondValue([2, 21, 31, 41]));


//// Scope ////

// var has a global scope let, const has block scope

//Arrow Function
const addTwo = (num1, num2) =>  num1 + num2
console.log(addTwo(4,3));
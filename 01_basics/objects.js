//Objects Literon

// const myObj = {
//     name: "Abdul Rehman",
//     "full name": "Abdul Rehman Shahbaz",
//     age: 18,
//     location: "Gujranwala",
//     email: "an@gmail.com",
//     isLogged: false,
//     lastLogin: ["Monday", "Friday"]
// }

// // console.log(myObj.email);
// // console.log(myObj["email"]);
// // console.log(myObj["full name"]);

// myObj.greeting = function(){
//     console.log(`Hello My Object ${this.name}`);
// }
// myObj.lastLogged = function(){
//     console.log(`${this.name} is last logged on ${this.lastLogin[1]}`);
// }
// console.log(myObj.greeting());
// console.log(myObj.lastLogged());

//// Object Singleton

const myObj = new Object()
//console.log(myObj);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}

//const obj3 = Object.assign({}, obj1, obj2)
//spread
const obj3 = {...obj1, ...obj2}
console.log(obj3);


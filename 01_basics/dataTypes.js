"use strict";
// treat code as a newer version, we cannot use undeclared variables

// alert(3+4) we are using node not browser

let name = "Abdul Rehman"
let age = 21
let isLoggedIn = true

//number => 2 to power 53
//bigint
//String => ""
//Boolean => true/false
//Null => standalone value
//Undefined => 
//Symbol => unique
//Object

//console.log(typeof(age));

//////// Conversion ////////////

let num = 3
let strNum = String(num)
//console.log(typeof strNum);


//////// DataTypes ////////////

//Primitive
// ---> 7 types String, Number, Boolean, Null, Undefined, Symbol, BigInt

const id = Symbol('124')
const anotherID = Symbol('124')
console.log(id === anotherID);
const bigNum = 252378829862398n


//Reference
//Array, Object, Functions

const std = ["Ali", "Bilal", "Ahmad"]
let myObj = {
    name: "Abdul Rehman",
    age: 21
}
const myFunction = function(){
    console.log("Hello JavaScript");
}

//console.log(typeof myFunction);

//JavaScript is a dynamically typed language.
//You do not need to explicitly declare the data type of a variable when you declare it.
// JavaScript infers the type based on the value assigned to it.

//Stack (Primitive) --> copy of variable   Heap (Reference) --> reference of variable (one change other)
let userOne = {
    name: "AbdulRehman",
    age: 21
}

let userTwo = userOne

userTwo.age = 22

console.log(userOne.age);
console.log(userTwo.age);
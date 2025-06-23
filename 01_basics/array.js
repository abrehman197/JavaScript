//Arrays are resizeable, 0 indexed, shallow copy (reference)
const arr = [1,2,3,4,5]
//console.log(arr[3]);

//Array Methods

//arr.push(6)
//arr.push(7)
//arr.pop()
//arr.unshift(21)
// const newArr = arr.join()

// console.log(arr);
// console.log(typeof newArr);

console.log("A ", arr);
const n1 = arr.slice(0, 2) //does not include last index 
console.log("Slice ", arr); //It doesn't remove that specific part from array
console.log(n1);

const n2 = arr.splice(0, 2) //include last index also
console.log("Splice ", arr); //It remove that specific part from array
console.log(n2);
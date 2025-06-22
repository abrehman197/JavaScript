const accID = 1234
let accMail = "ali@gmail.com"
var accPassword = "12345"
accCity = "Gujranwala"
let accState

// accID = 2 not allowed cannot change const value
// Prefer no to use var due to block scope funtional scope like a global variable

accMail = "ahmad@gmail.com"
accPassword = "44312"
accCity = "Lahore"

console.log(accID);
console.log(accMail);
console.log(accPassword);

console.table([accID, accMail, accPassword, accCity, accState])
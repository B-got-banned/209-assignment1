var name = "Dalia" //var's the oldest variable declaration type and is function-scoped or globally scoped
let country = "Japan" //let is block-scoped and its variable can be altered but not redeclared
const password = 318002 //const is also scoped and its variable can neither be altered nor redeclared

console.log(name)//name at this point is Dalia
let age //variable declaration
age = 100 //variable initialization
const tax = 0.56 //variable declaration + initialization
name = "Felix"
console.log(name)//name at this point is Felix
// var and let allow for altering values even after the variables have been declared, const does not
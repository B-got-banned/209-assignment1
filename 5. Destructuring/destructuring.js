//Destructuring allows for extraction of values or properties from objects into distinct variables
let snacks = ["Pringles", "Cheetos", "Munch It", "Skittles"]//array declaration and initalization
let [snack1, snack2, snack3, snack4] = snacks//destructuring the array..
//now we can reference the snacks this way
console.log(snack1)//output: Pringles
console.log(snack2)//output: Cheetos
console.log(snack3)//output: Munch It
console.log(snack4)//output: Skittles
let [s1, , , s2] = snacks//commas could be made use of to skip an element, here Cheetos and Munch It get skipped over
console.log(`${s1}, ${s2}`)
let [sn1, ...otherSnacks] = snacks//... is the rest parameter which can be used to collect the remaining elements into a new array
console.log(sn1)
console.log(otherSnacks)

const family = {father: "Hikaru",
                mother: "Mo",
                children: 4,
                country: "Japan",
              //  pet: "dog"
}//object declaration and initialization
const {children, country} = family//object destructuring by assigning properties to variables of the same name
console.log(children)
console.log(country)
const {father: fatherName, mother: motherName} = family//object destructuring by assigning properties to variables of different names than the properties
console.log(fatherName)
console.log(motherName)
const {pet = "none"} = family//default value that might not exist in the object
console.log(pet)
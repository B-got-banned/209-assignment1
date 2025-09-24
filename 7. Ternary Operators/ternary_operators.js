//a.k.a the conditional operator is like a condensed if.. else statement
let isSunny = false
//with the ternary operator, if a condition evaluates to be true, then the first statement after the question mark is executed, else if that condition evaluates to be false, the statement after the column is executed
console.log(isSunny ? "It's sunny out! Maybe hit the beach?" : "Take your umbrella with you just in case!")

//you could also have more than two statements in your ternary operator but it shouldn't be too complex, any selection that needs to be made out of more than 2 options should be done with if.. else if.. else or switch block
let score = 85
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C"
console.log(grade)
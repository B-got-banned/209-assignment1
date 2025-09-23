const sayBirthday = (isBirthday, name, age) => isBirthday ? `HAPPY BIRTHDAY ${name}! You are now ${age} years old! \nWelcome to a new age! I'm soooooo proud of you!` : `Bye! Come back when it's your birthday.` //named arrow function with parameters

console.log(sayBirthday(false, "Bethel", 17))//logging the call of the arrow function named sayBirthday

const tripleNum = num => num * 3
console.log(tripleNum(45))
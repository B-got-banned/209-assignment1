let names = ["Danielle", "Christopher", "Morticia", "Sven"] //declaration and initialization of array of names
names.pop()//pop() method removes the last element in the array
console.log(names)
names.push("Mabel", "Gregory")//push() method appends elements to the end of the array
console.log(names)
names.shift()//shift() method removes the first element of the array
console.log(names)
names.unshift("Mariam")//unshift() method appends elements to the beginning of the array
console.log(names)//this logs the array as an object
names.forEach(name => console.log(name))//forEach() method can iterate through an array without returning a new array
let bigNames = names.map(name => name.toUpperCase())//map() method can iterate through an array and return a new array that could be used for other operations just like how in this line, the elements in the names array have been converted to all uppercase and stored in the new array bigNames
bigNames.forEach(name => console.log(name))

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNums = nums.filter(num => num % 2 == 0)//filter() method creates a new array with elements that meet only a specified condition, in this line, the condition is that the element should be divisible by 2 (meaning it's even)
evenNums.forEach(eNum => console.log(eNum))
//the spread operator allows for unpacking arrays and string or object properties into individual values
const nums = [2, 4, 6, 8, 10]
const copiedNums = [...nums]//spread operator provides a shallow copy of the array
console.log(nums)
console.log(copiedNums)
//we can do the same for objects
const pairs = {b : 2,
              d : 4,
              f : 6
}
const copiedPairs = {...pairs}
//arrays and objects can also be combined into new arrays and objects
const nums1 = [1, 3, 5, 7, 8]
const allNums = [...nums, ...nums1]
const pairs1 = {a : 1,
                c : 3,
                e : 5
}
const allPairs = {...pairs, ...pairs1}
console.log(allPairs)
//spread operator can be used to pass an array as an argument to a function too
let sumAll = (n1, n2, n3, n4, n5) => n1 + n2 + n3 + n4 + n5
console.log(sumAll(...nums))

//new elements to arrays and properties to objects can also be added
const newNums = [5, ...nums, ...nums1, 9] // newNums becomes [ 5, 2, 4, 6, 8, 10, 1, 3, 5, 7, 8, 9]
const newPairs = {g : 7, ...pairs}// newPairs becomes { g: 7, b: 2, d: 4, f: 6 }
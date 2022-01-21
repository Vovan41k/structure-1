const NumberArray = require ("./lib/NumberArray")
const numbers = [2,3,5,7,9,11,13,-15,-17,2,3]
console.log(NumberArray.max(numbers))
console.log(NumberArray.min(numbers))
console.log(NumberArray.avg(numbers))
console.log(NumberArray.count(numbers, 5))
console.log(NumberArray.filter(numbers, "even"))
console.log(NumberArray.filter(numbers, "odd"))
console.log(NumberArray.filter(numbers, "div", 3))



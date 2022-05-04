//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenArray(array)
{
  let newArray = new Array()
  array.forEach(num => num%2||newArray.push(num))
  return newArray
}

function arrayGenerator()
{
  let numArray = new Array()
  let size = Math.floor(Math.random()*100)
  for(let i = 0; i < size; ++i) numArray.push(Math.floor(Math.random()*1000))
  return numArray
}

console.log(evenArray([1,2,3,4,5,6,7,8,9,10]))
console.log(evenArray(arrayGenerator()))
console.log(evenArray(arrayGenerator()))
console.log(evenArray(arrayGenerator()))
console.log(evenArray(arrayGenerator()))

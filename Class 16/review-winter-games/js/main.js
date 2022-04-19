//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function arrayNums(array)
{
  let newArray = []
  array.forEach(x => x%2==0 && newArray.push(x))
  return newArray
}

let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(arrayNums(arr))

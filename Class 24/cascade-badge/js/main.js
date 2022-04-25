//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
function revList(array)
{
  return array.reverse()
}
console.log("Reverse of 3,2,1:", revList([3,2,1]))
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function weirdMath(arr1, arr2)
{
  return arr1.reduce((a,b) => a + b**2, 0) > arr2.reduce((a,b) => a + b**3, 0)
}
console.log("Which is greater?! [1,2,3] %WEIRD% [1,2,3]\n",
  weirdMath([1,2,3], [1,2,3]) ? "the first one!" : "not the first one!")
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function indexMath(array)
{
  return array.filter((item, index) => item%index===0)
}
console.log(indexMath([22, -6, 32, 82, 9, 25]))
console.log(indexMath([68, -1, 1, -7, 10, 10]))
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function stringyNums(array)
{
  return array.reduce((a,b) => a+ +b, 0) //unary operator coerces (b) into a number
}

console.log(stringyNums([1,'2',3,4,'5',6,7,'8',9,10]))
console.log(stringyNums(['2',5,'11',4]))

//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]
let sum = nums.reduce((a,b) => a+b, 0)
alert(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

/*function squareNums(array)
{
  return array.map(x => x**2)
}*/
let squareNums = (array) => array.map(x => x**2)
console.log(squareNums(nums))
//Create a function that takes string
//Print the reverse of that string to the console
function stringR(string)
{
  return string.split("").reverse().join("")
}
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function testStrings(string)
{
  if(string === stringR(string)) alert(string, " is a palindrome!")
}

testStrings("racecar")
testStrings("what is up!?")

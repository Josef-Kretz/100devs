//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let array1 = [1,2,3,4,5,6,7,8,9,10]
let sum = array1.reduce((a,b) => a+b, 0)
alert(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let arrayNum = array => array.map(i => i*i)
console.log(arrayNum(array1))
//Create a function that takes string
//Print the reverse of that string to the console
function stringRev(string)
{
  let newString = ""
  for(let i = string.length-1;i>=0;--i)
  {
    newString += string[i]
  }
  return newString
}
let testString = "I've got about nine of these things in the trunk of my car... want one?"
console.log(stringRev(testString))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindromeTest(string)
{
  let testString1 = stringRev(string).toLowerCase().trim()
  let testString2 = string.toLowerCase().trim()
  if(testString1 === testString2) alert(`${string} is a palindrome!`)
}
palindromeTest("radar")
palindromeTest("zesty")
palindromeTest("turn down for what" + stringRev(" turn down for what"))

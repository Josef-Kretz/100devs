// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = "laying on the beach"
holiday = holiday.toUpperCase()
console.log(holiday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let string = "This string is many characters long!"
alert(string.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNums(n1,n2,n3,n4,n5)
{
  let total = 100-n1-n2-n3-n4-n5
  alert(Math.abs(total))
}
fiveNums(1,2,3,400,5)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNums(n1,n2,n3)
{
  console.log("Max: ",Math.max(n1,n2,n3))
  console.log("Min: ",Math.min(n1,n2,n3))
}
threeNums(1,2,3)
threeNums(4,2,3)
threeNums(5,100,5)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsTails()
{
  let num = Math.floor(Math.random()*2)
  return num==1 ? "heads" : "tails"
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function callHeads(num)
{
  for(let i = 0; i < num; ++i) console.log(headsTails())
}
callHeads(10)

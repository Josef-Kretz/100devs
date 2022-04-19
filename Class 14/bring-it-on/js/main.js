// *Variables*
// Create a variable and alert log the value
let val = '54'
alert(val)
// Create a variable, add -15 to it, and print the value to the console
let num = 6
num += -15
console.log(num)
// *Functions*
// Create a function that multiplys 4 numbers and alerts the product
function mult4(n1,n2,n3,n4)
{
  alert(n1*n2*n3*n4)
}
mult4(1,2,3,4)
// Create a function that divides one number by another and returns the remainder plus 10
function div2(n1, n2)
{
  return (n1%n2)+10
}
console.log(`div2: ${div2(10,6)}`)
// *Conditionals*
// Create a function that adds three numbers and if the sum is greater than 1000 alert "Block Party"
function add3(n1,n2,n3)
{
  let sum = n1+n2+n3
  if(sum > 1000) alert("Block Party")
}
add3(100,200,701)
// Create a function that divides five numbers and if the quotient is divisible by 5 alert LINCOLN
function div5(n1,n2,n3,n4,n5)
{
  let total = n1/n2/n3/n4/n5
  if(total%5 == 0) alert("LINCOLN")
}
div5(100,1,1,1,1)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x cubed times where x was the number passed in
function wordNum(word, num)
{
  let counter = num*num*num
  while(counter > 0)
  {
    console.log(word)
    --counter;
  }
}

wordNum('I like to test functions!', 9)

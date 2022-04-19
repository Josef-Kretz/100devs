// *Variables*
// Create a variable and console log the value
let friends = "F R I E N D"
console.log(friends)
// Create a variable, add 10 to it, and alert the value
let num = -10
num += 10
alert(num)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(num1, num2, num3, num4)
{
  alert(num1-num2-num3-num4)
}
// Create a function that divides one number by another and returns the remainder
function div2(num1, num2)
{
  return num1%num2
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2)
{
  if(num1 + num2 > 50)
  {
    alert('Jumanji')
  }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mult3(num1, num2, num3)
{
    let prod = num1*num2*num3
    if(prod%3 == 0)
    {
      alert("ZEBRA")
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNum(num, word)
{
  //for(let i = 0; i < num; ++i)
  while( num > 0)
  {
    console.log(word)
    --num;
  }
}

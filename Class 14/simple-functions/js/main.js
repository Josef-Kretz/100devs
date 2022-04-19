//---Easy
//create a function that adds two numbers and alerts the difference
function add2(num1,num2)
{
  alert(num1-num2)
}
add2(5,2)
//create a function that divides two numbers and console logs the quotient
function div2(num1, num2)
{
  console.log(num1/num2)
}
div2(5,2)
//create a function that multiplys four numbers and returns the product
function mult4(n1,n2,n3,n4)
{
  return n1*n2*n3*n4
}
console.log("mult4:", mult4(1,2,3,4))
//---Medium
//create a function that takes in four numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the difference of the last two numbers
function complex4(n1,n2,n3,n4)
{
  let sum = n1 + n2
  let dif = n3 - n4
  return sum%dif
}
console.log("complex4:", complex4(10,20,30,4))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function compute4(n1,n2,n3,n4)
{
  let prod = n1 * n2
  if(prod > 100) console.log(prod+n3+n4)
  else if(prod < 100)
  {
    let dif = n3-n4
    console.log(prod-dif)
  }
  else if(prod === 100)
  {
    prod *= n3
    alert(prod%4)
  }
}

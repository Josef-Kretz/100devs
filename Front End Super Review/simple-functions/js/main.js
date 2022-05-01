//---Easy
//create a function that subtracts two numbers and alerts the difference
let sub2 = (n1, n2) => alert(n1-n2)
//create a function that divides three numbers and console logs the quotient
let div3 = (n1,n2,n3) => console.log((n1/n2)%n3)

//create a function that multiplys three numbers and returns the product
let mult3 = (n1,n2,n3) => n1*n2*n3
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
let complex3 = (n1,n2,n3) => (n1+n2)%n3
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function complex4(n1,n2,n3,n4)
{
  let prod = n1 * n2
  if(prod > 100) console.log(prod+n3+n4)
  else if(prod < 100) console.log(prod-n3-n4)
  else if(prod == 100) alert((prod*n3)%n4)
}

sub2(10,5)
div3(100,10,4)
console.log(mult3(2,2,2))
console.log(complex3(100,100,60))
complex4(10,11,1,1)
complex4(5,5,20,5)
complex4(10,10,10,60)

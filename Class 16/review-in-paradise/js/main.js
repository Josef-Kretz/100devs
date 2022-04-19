// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = 3;
food = "pizza"
alert(food)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let notBlank = "string"
alert(notBlank[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNum(n1,n2,n3)
{
  alert(((n1/n2)*n3).toFixed(2))//toFixed() sets decimal place to 2 places
}
threeNum(1,2,3)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num)
{
  console.log(num**(1/3))
}
cubeRoot(27)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthly(month)
{
  let m = month.toLowerCase()
  if(m=="august" || m=="july" || m=="june") alert ("YAY")
  else alert("Booo")
}
monthly("august")
monthly("october")

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function takeNum(num)
{
  for(let i = 1;i <= num;++i)
  {
    if(i%5!=0) console.log(i)
  }
}
takeNum(12)

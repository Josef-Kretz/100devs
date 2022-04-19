// *Variables*
// Declare a variable, assign it a value, and alert the value
let bouncer = "BOUNCE"
alert(bouncer)
// Create a variable, divide it by 10, and console log the value
let num = 40
num /= 10
console.log(`Num has been found equivalent to: ${num}\n...and that's okay with me.`)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function mult3(num1, num2, num3)
{
  alert(num1*num2*num3)
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function weird4(num1, num2, num3, num4)
{
  console.log(num1+num2-num3-num4)
}
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function numbers3(num1, num2, num3)
{
  let total = 100 + num1 - num2
  total /= num3
  if(total > 25)
  {
    console.log(`We have a winner!\nAnd the number is:\n${total}!`)
  }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfWeek(day)
{
  day = day.toLowerCase()
  if(day == "saturday" || day == "sunday")
  {
    alert(`${day} is on the weekend!`)
  }
  else if(day=="monday" || day=="tuesday" || day=="wednesday" || day=="thursday" || day=="friday")
  {
    alert(`Looks like ${day} is a week day`)
  }
  else
  {
    alert("Try again! You didn't provide a day of the week")
  }
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function complexNum(num)
{
  //num+2 is to allow the count to pass the num parameter as requested by "to that number or greater"
  for(let i = 1;i < num+2; i += 3)
  {
    console.log(i)
  }
}

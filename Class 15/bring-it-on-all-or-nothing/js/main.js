// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let test = true
alert(test)
// Declare a variable, reassign it to your favorite color, and console log the value
let color = "blue"
color = "green"
console.log(color)
// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function comp4(n1,n2,n3,n4)
{
  return (n1+n2+n3)/n4
}
console.log(comp4(1,2,3,4))
// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function power(n1,n2)
{
  console.log(n1**n2)
  //same as Math.pow(n1,n2)
}
console.log("testing power function!")
power(2,4)
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function stringTest(bool, string)
{
  /*if(bool)
  {
    alert(string)
    return
  }
  console.log(string)*/
  bool && alert(string) || console.log(string)
}
stringTest(6=="6", "DOES SIX EQUAL \"6\"?")
stringTest(6==='6', "When does six not equal six!?!")
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzBuzz(num)
{
  for(let i = 1;i <= num; ++i)
  {
    /*if(i%3==0 && i%5==0) console.log('fizzbuzz')
    else if(i%3==0) console.log('fizz')
    else if(i%5==0) console.log('buzz')
    else console.log(i)*/
    //i%3==0&&i%5==0&&console.log('fizzbuzz') || i%3==0&&i%5!=0&&console.log('fizz') || i%5==0&&i%3!=0&&console.log('buzz') || i%3!=0&&i%5!=0&&console.log(i)
    //console.log((i%3==0 ? 'fizz':'')+(i%5==0?'buzz':'')||i)
    console.log((i%3 ? '':'fizz')+(i%5?'':'buzz')||i)
    /*console.log(
      i%3==0&&i%5==0 ? 'fizzbuzz':
        i%3==0 ? 'fizz' :
          i%5==0 ? 'buzz' : i
    )*/
  }
}
console.log('Testing fizzbuzz:\n')
fizzBuzz(30)

//--- Easy
//create a variable and assign it a number
let num = 7
//minus 10 from that number
num -= 10
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input
let userNum = Number(document.querySelector('#danceDanceRevolution').value)
//add 25 to that number
userNum += 25
//alert that number
alert(userNum)
//--- Hard
//create a variable that holds the h1
let headOne = document.querySelector('h1').value
//add an event listener to that element that console logs the sum of the two previous variables
document.querySelector('h1').addEventListener('click', sumFun)

function sumFun(){
  console.log(userNum + num)
}

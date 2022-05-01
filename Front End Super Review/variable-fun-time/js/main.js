//--- Easy
//create a variable and assign it a number
let num = 7
//minus 10 from that number
num -= 10
//print that number to the console
console.log(num)
//--- Medium
document.querySelector('h1').addEventListener('click', getNum)

function getNum()
{
  //create a variable that holds a value from the input
  let userNum = Number(document.querySelector('input').value)
  //add 25 to that number
  userNum += 25
  //alert that number
  alert(userNum)
  addNums(num, userNum)
}
//--- Hard
//create a variable that holds the h1
let heading1 = document.querySelector('h1').innerText
//add an event listener to that element that console logs the sum of the two previous variables
function addNums(n1, n2)
{
  console.log(n1 + n2)
}

//--- Easy
//create a variable and assign it a boolean
let test = true
//create a variable and assign it a string that is a number
let stringNum = "3"
//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif
stringNum = Number(stringNum) + 10
//print that number to the console
console.log(stringNum)
//--- Medium
//create a variable that holds a value from the input

//add 21 to that number
// document.querySelector('#mrRightNow').addEventListener('click', add21)
// function add21()
// {
//   let inText = document.querySelector('input').value
//   inText = Number(inText) + 21
//   alert(inText)
// }

//--- Hard
//create a variable that holds the h1
let h1S = document.querySelector('#mrRightNow')
//add an event listener to that element that places the product of the two previous variables in the DOM
h1S.addEventListener('click', printSum)

function printSum()
{
  let inText = document.querySelector('input').value
  inText = Number(inText) + 21
  document.querySelector('#needSomeTLC').innerText = stringNum * inText
}

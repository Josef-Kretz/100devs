// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function arrayFun(array)
{
  let firstNum = array[0]
  let lastNum = array[array.length-1]

  if(firstNum < lastNum)alert("hi")
  else if(firstNum > lastNum)alert("bye")
  else if(firstNum == lastNum) alert("We close in an hour")
}

let arr = [1,1,2,0]
arrayFun(arr)
arr.pop()
arrayFun(arr)
arr.pop()
arrayFun(arr)

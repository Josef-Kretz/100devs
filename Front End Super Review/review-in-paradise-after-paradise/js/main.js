// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function arrayFunc(array)
{
  if(array.length < 2) return -1
  let n1 = array.shift()
  let nN = array.pop()
  if(n1 < nN) alert('Hi')
  else if(n1 > nN) alert('Bye')
  else if(n1 == nN) alert('We close in an hour')
}

arrayFunc([1,2,3,4,5,6,7,8,9,10])
arrayFunc([10,60,5])
arrayFunc([1,2,3,4,5,6,1])

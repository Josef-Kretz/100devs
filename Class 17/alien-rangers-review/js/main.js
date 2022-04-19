//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ['twilight zone', 'star trek', 'stargate sg-2', 'Casual']
shows.forEach(x=>console.log(x))
//Create and array of numbers
let nums = [1,2,3,4,5,6,7,8,9,10]
//Return a new array of numbers that includes every even number from the previous Arrays
let nums2 = nums.filter(x=>x%2==0)
console.log(nums2)
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function arraySum(array)
{
  /*
  let highest = Math.max(...array)
  let lowest = Math.min(...array)
  let shigh = lowest
  let slow = highest
  for(let i = 0;i < array.length; ++i)
  {
    let num = array[i]
    if(num > shigh && num < highest) shigh = num
    if(num < slow && num > lowest) slow = num
  }
  alert(shigh+slow)
  */
  /*let sorted = array.sort((a,b)=>a-b)
  alert(sorted[1]+sorted[sorted.length-2])*/
  alert(array.sort((a,b)=>a-b)[1]+array.sort((a,b)=>a-b)[array.length-2])
}
arraySum(nums)
arraySum(nums2)

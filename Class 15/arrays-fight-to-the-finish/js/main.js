//Create an array of movie titles. Loop through the array and add each element to the h2.
let movies = ['shrek', 'spongebob the movie', 'simpsons the movie', 'star wars', 'lord of the rings']
movies.forEach(x => document.querySelector('h2').append(x,' '))
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [1,2,3,4,5,6,7,8,9,10]
nums.forEach((x,i) => nums[i]+=3)
console.log(nums)
//Find the average of all the numbers from question three
let sum = 0
nums.forEach(x => sum += x)
let avg = sum/nums.length
console.log(avg)

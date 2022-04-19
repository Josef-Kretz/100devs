// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = "       peace tea               "
drink = drink.trim()
console.log(drink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleWords = "I like to drive down to the levy sometimes, usually in my truck, but one day: it was dry!"
let hasApple = multipleWords.includes('apple')
console.log(`Does\n"${multipleWords}"\ncontain the word 'apple'?\n`,hasApple?'Yes':'No')
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors()
{
  let choice = Math.floor(Math.random()*3)
  return choice==0&&'rock' || choice==1&&'paper' || choice==2&&'scissors'
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRPS(choice)
{
  let bot = rockPaperScissors()
  if(bot == choice) return "Tie"
  else if(bot=='rock') return choice=='paper'&&'Win'||choice=='scissors'&&'Lose'
  else if(bot=='paper') return choice=='scissors'&&'Win'||choice=='rock'&&'Lose'
  else if(bot=='scissors') return choice=='rock'&&'Win'||choice=='paper'&&'Lose'

  return `Error User choice:${user} and Bot choice:${bot}`
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function multiRPS(array)
{
  array.forEach(el => console.log(playRPS(el)))
}

function createGames(num)
{
  let game = []
  for(let i = 0; i < num;++i)
  {
    game.push(rockPaperScissors())
  }
  multiRPS(game)
}

createGames(5)

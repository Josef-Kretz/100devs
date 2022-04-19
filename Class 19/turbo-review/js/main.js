// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let question = "This is a long sentence that might even count as a question?"
if(question.includes('?')) alert(question)
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let manyWords = "Hello jr. dev, I am also a jr. dev. How many jr. dev should a jr. dev know?"
manyWords.replaceAll("jr. dev", "software engineer")
console.log(manyWords)
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function RPS()
{
  let bot = Math.floor(Math.random()*3)
  //if bot is 0, it converts to false -> goes to scissors
  //if bot was 1, 1-1=0, bot converts to false -> goes to paper
  //if bot was 2, 2-1=1, bot doesn't convert to false -> goes to rock
  return bot ? --bot ? 'rock' : 'paper' : 'scissors'
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRPS(player)
{
  let choice = player.toLowerCase()
  let bot = RPS()
  if(choice == bot) return 'Tie'
  if(choice == "rock") return bot=='paper' ? "Lose" : "Win"
  if(choice == "paper") return bot=='rock' ? 'Win' : "Lose"
  if(choice == "scissors") return bot=="rock" ? "Win" : "Lose"
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function rapidGame(array)
{
  array.forEach(choice => console.log(playRPS(choice)))
}

let test = ['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors','rock', 'paper', 'scissors']
rapidGame(test)

function playForMe(num)
{
  let array = new Array()
  for(let i =0; i < num; ++i)
  {
    array.push(RPS())
  }
  rapidGame(array)
}

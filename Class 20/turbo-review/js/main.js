// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let sentence = "It is a beautiful day today"
console.log(sentence.repeat(5))
//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it
let letters = ['a','b','c','d','e','f','g']
alert(letters.join(""))
// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
let rocks = () => {
  let roll = Math.floor(Math.random()*5)
  switch(roll)
  {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
    case 3:
      return 'lizard'
    case 4:
      return 'spock'
    default:
    throw new Error("Issue generating bot choice")
  }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(userChoice)
{
  let user = userChoice.toLowerCase()
  let bot = rocks()
  if(bot == user) return 'Tie'
  else if(bot == 'rock')
  {
    if(user == 'paper' || user =='spock') return 'Win'
    else return 'Lose'
  }
  else if(bot == 'paper')
  {
    if(user=='scissors' || user=='lizard') return 'Win'
    else return 'Lose'
  }
  else if(bot == 'scissors')
  {
    if(user=='rock' || user=='spock') return 'Win'
    else return 'Lose'
  }
  else if(bot == 'lizard')
  {
    if(user == 'rock' || user=='scissors') return 'Win'
    else return 'Lose'
  }
  else if(bot=='spock')
  {
    if(user=='paper' || user=='lizard') return 'Win'
    else return 'Lose'
  }
  throw new Error("Issue in checkWin")
}

let multiPlay = array => array.forEach(choice => console.log(checkWin(choice)))

let test = ['rock','paper', 'scissors', 'lizard', 'spock']

multiPlay(test)

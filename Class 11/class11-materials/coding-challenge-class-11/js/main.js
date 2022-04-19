//get text to convert to lower case
document.querySelector('#lcBtn').addEventListener('click', getUserData)

function getUserData()
{
  const userData = document.querySelector("#userInput").value
  lowerCase(userData)
}

//convert text to lower case
function lowerCase(text)
{
  let newUD = text.toLowerCase()
//display converted text
  document.querySelector("#convertedText").innerText = newUD
  return newUD
}

//set input/output example that completes coding challenge
const sampleInput = `COMMENT OUT YOUR JS
TYPE IT ALL OUT AGAIN WITHOUT LOOKING
PEAK IF YOU HAVE TOO
REPEAT UNTIL YOU DO NOT HAVE TO PEAK
DELETE YOUR JS ENTIRELY
AND DO IT AGAIN
THEN DO IT AGAIN BUT CHANGE SOMETHING!`

const sampleOutput = lowerCase(sampleInput)

document.querySelector("#userInput").defaultValue = sampleInput
document.querySelector("#convertedText").innerText = sampleOutput

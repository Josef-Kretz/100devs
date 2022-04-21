//Create a button that adds 1 to a botScore stored in localStorage
if(!localStorage.getItem('botScore')) localStorage.setItem('botScore', 0)
let raisingScore

document.querySelector('input').value = localStorage.getItem('botScore')

document.querySelector('#increaseScore').addEventListener('click', upScore)
document.querySelector('#increaseScore').addEventListener('mousedown', rapidScore)
document.querySelector('#increaseScore').addEventListener('mouseup', ceaseScore)
document.querySelector('#increaseScore').addEventListener('mouseout', ceaseScore)

document.querySelector('#resetScore').addEventListener('click', resetScore)

function upScore()
{
  let score = localStorage.getItem('botScore')
  localStorage.setItem('botScore', ++score)
  document.querySelector('input').value = score
}

function resetScore()
{
  localStorage.setItem('botScore', 0)
  document.querySelector('input').value = 0
}

function rapidScore()
{
  raisingScore = setInterval(upScore, 100);;
}

function ceaseScore()
{
  clearInterval(raisingScore)
}

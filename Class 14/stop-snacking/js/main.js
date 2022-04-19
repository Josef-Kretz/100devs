//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking()
{
  let output = ""
  let num = Number(document.querySelector('input').value)
  let outEl = document.querySelector('#stops')

  if(isNaN(num))
  {
    output = "Please only enter a number"
    outEl.innerText = output
    return
  }

  for(let i = 0;i < num;++i)
  {
    output += `stop `
  }
  outEl.innerText = output
}

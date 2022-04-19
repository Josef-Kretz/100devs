//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', snacks)

function snacks()
{
  document.querySelector('#stops').innerText = ""
  let num = Number(document.querySelector('input').value)
  for(let i = 0; i < num; ++i)
  {
    document.querySelector('#stops').append(' stop')
  }
}

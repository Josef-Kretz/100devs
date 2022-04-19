//Create a function that has a loop that prints your resolution 365 times to the console and then call that function
document.querySelector('h1').addEventListener('click', res365)
//Bonus can you make it print your resolution 365 times to the DOM?
function res365()
{
  let res = document.querySelector('#resolution').value
  let letsGo = ""
  for(let i = 0; i < 365; ++i)
  {
    letsGo += `${res} `
  }
  document.querySelector('#letsGo').innerText = letsGo
}

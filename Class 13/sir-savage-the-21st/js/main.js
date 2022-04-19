//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function sir21()
{
  for(let i = 1; i <= 21; ++i)
  {
    console.log('21')
    document.querySelector('#savageSays').innerText += " 21"
  }

  let count = 1
  while( count <= 21)
  {
    console.log('21')
    document.querySelector('#savageSays').append(' 21')
    ++count;
  }
}
//Bonus can you make it print '21' 21 times to the dom?
sir21()

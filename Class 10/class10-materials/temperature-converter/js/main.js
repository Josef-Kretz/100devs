//Write your pseduo code first!
//click button
  //get value
  //convert value
  //display value

//click button
document.querySelector('#tempButton').addEventListener('click', convert)

function convert()
{
  //get value
  const userTemp = document.querySelector('#userValue').value
  //convert value
  //= (°C × 9/5) + 32
  let newTemp = userTemp*9/5+32
  //display value
  document.querySelector('#convertedTemp').innerText = newTemp

  if(newTemp <= 32)
  {
    document.querySelector('#convertedTemp').style.color = "blue"
  }
  else if(newTemp < 70)
  {
    document.querySelector('#convertedTemp').style.color = "lightblue"
  }
  else if (newTemp < 100)
  {
    document.querySelector('#convertedTemp').style.color = "green"
  }
  else
  {
    document.querySelector('#convertedTemp').style.color = "red"
  }
}

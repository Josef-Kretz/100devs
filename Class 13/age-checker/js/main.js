//Create a conditonal that checks their age
document.querySelector('h1').addEventListener('click', checkAge)


function checkAge(){
  let age = Number(document.querySelector('#danceDanceRevolution').value)
  let result = ""
  if(age < 16)
  {
    //If under 16, tell them they can not drive
    result = "You're too young to drive"
  }
  else if(age < 18)
  {
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
    result = "You can't hate from outside the club because you can't even get in"
  }
  else if(age < 21)
  {
    //If under 21, tell them they can not drink
    result = "You can't drink"
  }
  else if(age < 25)
  {
    //If under 25, tell them they can not rent cars affordably
    result = "You can't rent cars affordably"
  }
  else if(age < 30)
  {
    //If under 30, tell them they can not rent fancy cars affordably
    result = "You can't rent fancy  cars affordably"
  }
  else if(age > 30)
  {
    //If over 30, tell them there is nothing left to look forward too
    result = "You've nothing to look forward to"
  }

  document.querySelector('p').innerText = result


}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

//Create a conditonal that checks the day
document.querySelector('h1').addEventListener('click', checkDay)

function checkDay()
{
  let day = document.querySelector('#whatDay').value
  let house = document.querySelector('#whatHouse').value
  day = day.toLowerCase()
  house = house.toLowerCase()

  let p = document.querySelector('p')

  if(day === "tuesday" || day==="thursday") p.innerText="You have class today"
  else if(day==="saturday") p.innerText="You have office hours"
  else if(day==="friday" && house ==="turing") p.innerText="You have private office hours"
  else if(day==="wednesday" && house ==="hopper") p.innerText = "you have private office hours"
  else if(day==="monday" && house==="hamilton") p.innerText = "Book a 1 on 1"
  else p.innerText = "Time to study"
}

//If Tuesday or Thursday, tell them they have class
//If Saturday, tell them they have Office Hours
//If Friday and House Turing, they have private office hours
//If Wednesday and House Hopper, tell them they have private office hours
//If Monday and House Hamilton, tell them to book a 1on1
//If any other day or wrong house, tell them to study



//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

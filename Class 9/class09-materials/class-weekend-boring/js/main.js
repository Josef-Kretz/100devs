document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#day').value.toLowerCase()
  let day_check = day.toLowerCase()

  //Conditionals go here
  if(day_check == "saturday" || day_check == "sunday")
  {
    document.querySelector('#placeToSee').innerText = "Yas Queen"
  }
  else if (day_check == "tuesday" || day_check== "thursday") {
    document.querySelector('#placeToSee').innerText = "YaSSSS Queen!"
  }
  else {
    document.querySelector('#placeToSee').innerHTML = "No, just no"
  }

}

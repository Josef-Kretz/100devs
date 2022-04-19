//Write your pseduo code first!
//get temperature
document.querySelector('#convertBtn').addEventListener('click', conversion)
//convert
function conversion()
{
  const temp = document.querySelector('#userValue').value
  let newTemp = FtoC(temp)
  //display converted temperature
  alert(newTemp)

//set seasonal background image of corresponding temperature value
if(newTemp > 25)
{
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')"
}
else if(newTemp < 25 && newTemp > 15)
{
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1462275646964-a0e3386b89fa')"
}
else if(newTemp < 15 && newTemp > 0)
{
  document.body.style.backgroundImage = "url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701460116-768x512.jpg')"
}
else
{
  document.body.style.backgroundImage = "url('https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg')"
}

  return newTemp
}

function FtoC(fTemp)
{
  let cTemp = (fTemp-32)/1.8
  return cTemp
}

/*
summer https://images.unsplash.com/photo-1507525428034-b723cf961d3e

winter https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg

fall https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701460116-768x512.jpg

spring https://images.unsplash.com/photo-1462275646964-a0e3386b89fa
*/

//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPic)

function getPic()
{
  let apiKey = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" //free demo api from NASA
  let date = document.querySelector('input').value
  date= apiKey + date

  fetch(date)
  .then(response => response.json())
  .then(data =>
    {
      clearPics()
      document.querySelector('h2').innerText = `Name:\n${data.title}`
      document.querySelector('h3').innerText = `Description:\n${data.explanation}`
      if(data.media_type === "image") document.querySelector('img').setAttribute('src', data.url)
      else if(data.media_type === "video") document.querySelector('embed').src = data.url
      else alert("Media Type not currently supported")
      if(data.code > 0) showFail()
    }
  )
  return true
}

function clearPics()
{
  document.querySelector('img').src = ""
  document.querySelector('embed').src = ""
}

function showFail()
{
  document.querySelector('h2').innerText = `Use YYYY-MM-DD Format Only`
  document.querySelector('h3').innerText = `Invalid Date/Failed to Load\nOnly Dates From June 16 1995 to Present Will Work`
  document.querySelector('img').setAttribute('src', "")
}

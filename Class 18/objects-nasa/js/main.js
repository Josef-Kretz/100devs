//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPic)

function getPic()
{
  let apiKey = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" //free demo api from NASA
  let date = document.querySelector('input').value

  if(checkDate(date)===false)
  {
    showFail()
    return
  }
  date= apiKey + date

  fetch(date)
  .then(response => response.json())
  .then(data =>
    {
      document.querySelector('img').setAttribute('src', data.url)
      document.querySelector('h2').innerText = `Name:\n${data.title}`
      document.querySelector('h3').innerText = `Description:\n${data.explanation}`
      if(data.code > 0) showFail()
    }
  )
  return true
}

function showFail()
{
  document.querySelector('h2').innerText = `Use YYYY-MM-DD Format Only`
  document.querySelector('h3').innerText = `Invalid Date/Failed to Load\nOnly Dates From June 16 1995 to Present Will Work`
  document.querySelector('img').setAttribute('src', "")
}

function checkDate(string)
{
  let regex = /(\d{4})\-(\d{1,2})\-(\d{1,2})/

  if(regex.test(string)===false) return false

  let arr = string.match(regex)
  let yr = Number(arr[1])
  let m = Number(arr[2])
  let d = Number(arr[3])

  //earliest available pic is June 16 1995
  if(yr < 1995 || yr==1995&&m<6 || yr==1995&&m==6&&d<16) return false
  //can't get future pics
  if(Date.valueOf(new Date(yr,m,d)) > Date.valueOf(new Date())) return false
  //make sure day is proper
  switch(m)
  {
    case 1:case 3:case 5:case 7:case 8:case 10:case 12:
      if(d>31) return false
      break
    case 4:case 6:case 9:case 11:
      if(d>30)return false
      break
    case 2:
      if(d==29&&yr%4==0&&yr%100!=0 || d==29&&yr%400==0) break
      if(d>28) return false
      break
    default:
    return false
    break
  }

  return true
}

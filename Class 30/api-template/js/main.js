//Make an api request using async await
document.querySelector('button').addEventListener('click', getDog)

document.addEventListener('keydown', (e) => e.key=="Enter"&&getDog())

async function getDog()
{
  try
  {
    let data = await fetch("https://dog.ceo/api/breeds/image/random")
    data = await data.json()
    document.querySelector('img').src = data.message
  }
  catch(err)
  {
    console.log("Error: " + err)
  }
}

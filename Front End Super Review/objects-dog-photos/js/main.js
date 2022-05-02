//Get a dog photo from the dog.ceo api and place the photo in the DOM
document.querySelector('img').addEventListener('click', getDog)

getDog() //gets first image, on click fetch new image

function getDog()
{
  let url = "https://dog.ceo/api/breeds/image/random"
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.querySelector('img').src = data.message
    })
    .catch(err => console.log("Error: ", err))
}

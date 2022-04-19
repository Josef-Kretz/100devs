//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', addDrink)

function addDrink()
{
  let search = document.querySelector('input').value
  search = search.trim()
  if(search.includes(" ")) search.split(" ").join("_")

  let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search

  fetch(url)
    .then(response => response.json())
    .then(commits => {
      document.querySelector('h2').innerText = 'Name: ' + commits.drinks[0]['strDrink']
      document.querySelector('h3').innerText = 'Instructions: ' + commits.drinks[0]['strInstructions']
      document.querySelector('img').src = commits.drinks[0]['strDrinkThumb']
  }
  )
    .catch(err => console.log("error:",err))
}

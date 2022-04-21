//Example fetch using pokemonapi.co
document.querySelector('#getPoke').addEventListener('click', getFetch)
document.querySelector('#random').addEventListener('click', pokeRandom)

document.onkeyup = (e) => e.which==13&&getFetch() || e.which==16&&pokeRandom()

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        clearFields()
        let types = data.types
        types.forEach(type => document.querySelector('h3').innerText += '\n' + type.type.name[0].toUpperCase() + type.type.name.slice(1))
        document.querySelector('h2').innerText += '\n' + data.name[0].toUpperCase() + data.name.slice(1)
        document.querySelector('img').src = data.sprites.front_default
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function clearFields()
{
  document.querySelector('h2').innerText = "Name?"
  document.querySelector('h3').innerText = "Type?"
}

function pokeRandom()
{
  let pokemon = Math.floor(Math.random()*898+1)
  document.querySelector('input').value = pokemon
  getFetch()
}

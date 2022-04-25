//Example fetch using pokemonapi.co
//rewrite to compare two pokemon, and list their common games
document.querySelector('#findPoke').addEventListener('click', comparePoke)
document.querySelector('#randomPoke').addEventListener('click', randPoke)

class PokemonCreator{
  constructor()
  {
    this.name = ""
    this.gameVersions = new Array()
    this.spriteUrl = ""
  }
}

function randPoke()
{
  let rand1 = Math.floor(Math.random()*898 + 1)
  let rand2 = Math.floor(Math.random()*898 + 1)
  document.querySelector('#poke1').value = rand1
  document.querySelector('#poke2').value = rand2

  comparePoke()
}

function comparePoke()
{
  const poke1 = document.querySelector('#poke1').value.toLowerCase()
  const poke2 = document.querySelector('#poke2').value.toLowerCase()
  const url1 = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2

  getPoke(url1, url2)
}

function getPoke(url1, url2)
{
  fetch(url1)
    .then(response => response.json()) //parse response as JSON
    .then(data => {
      let firstPokemon = new PokemonCreator()
      firstPokemon.name = data.name[0].toUpperCase() + data.name.slice(1)
      data.game_indices.forEach(game => firstPokemon.gameVersions.push(game.version.name))
      firstPokemon.spriteUrl = data.sprites.front_shiny

      fetch(url2)
        .then(response => response.json()) //parse response as JSON
        .then(data => {
          let secondPokemon = new PokemonCreator
          secondPokemon.name = data.name[0].toUpperCase() + data.name.slice(1)
          data.game_indices.forEach(game => secondPokemon.gameVersions.push(game.version.name))
          secondPokemon.spriteUrl = data.sprites.front_shiny

          displayOverlap(firstPokemon, secondPokemon)
        })
        .catch(err => {
          console.log("Error: ", err)
        })
    })
    .catch(err => {
      console.log("Error: ", err)
    })
}


function addList(arr, target)
{
  document.querySelector(target).replaceChildren()
  arr.forEach(el => {
    let li = document.createElement('li')
    li.textContent = el
    document.querySelector(target).appendChild(li)
  })
}

function displayOverlap(obj1, obj2)
{
  document.querySelector('#pokeName1').innerText = obj1.name
  document.querySelector('#pokeImg1').src = obj1.spriteUrl

  document.querySelector('#pokeName2').innerText = obj2.name
  document.querySelector('#pokeImg2').src = obj2.spriteUrl

  if(obj1.gameVersions.length ==0) obj1.gameVersions.push("Games not found! API will be updated eventually :)")
  if(obj2.gameVersions.length ==0) obj2.gameVersions.push("Games not found! API will be updated eventually :)")

  let overlap = obj1.gameVersions.filter(game => obj2.gameVersions.includes(game))
  if(overlap.length==0) overlap.push("No Overlapping games found!\nOr API out of date")

  addList(overlap, '#pokeGames1')
  addList(overlap, '#pokeGames2')

}

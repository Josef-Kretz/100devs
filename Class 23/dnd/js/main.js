//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('#getSpell').addEventListener('click', getFetch)
document.querySelector('#randomSpell').addEventListener('click', randomSpell)

document.querySelector('input').addEventListener('keydown', (e) => e.which=='13'&&getFetch())

document.addEventListener('keydown', (e)=> e.which=='82'&&document.querySelector('input')!=document.activeElement&&randomSpell())

function getFetch(){
  let choice = document.querySelector('input').value
  choice = choice.trim().split(' ').join("-").toLowerCase()
  choice = choice.replaceAll(/[^\w||-]+/g, "")
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       clearLists()
       document.querySelector('h2').innerText = "Name: " + data.name
       document.querySelector('h3').innerText = "Class: " + classReader(data.classes, "#classList")
       document.querySelector('h4').innerText = "Sub Classes: " + classReader(data.subclasses, "#subList")
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function classReader(array, ulName)
{
  let string = new String()
  array.forEach(cl =>
    {
      const li = document.createElement('li')
      li.textContent = cl.name
      document.querySelector(ulName).appendChild(li)
    })
  return string
}

function clearLists()
{
  let lists = document.querySelectorAll('ul')
  lists.forEach(list => list.replaceChildren())
}

function randomSpell()
{
  let randInt = Math.floor(Math.random()*319)
  const url = `https://www.dnd5eapi.co/api/spells/`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       let spell = data.results[randInt].name
       document.querySelector('input').value = spell
       getFetch()
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

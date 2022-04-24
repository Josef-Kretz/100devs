document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let choice = document.querySelector('input').value
  choice = choice.trim().split('-').join("")
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let token = '|^|'
        let title = data.title
        if(!localStorage.getItem('books')&&title!==undefined) localStorage.setItem('books', data.title)
        else if(title!==undefined)
        {
          let book = localStorage.getItem('books') + token + data.title
          localStorage.setItem('books', book)
        }
        console.log('test');
        let allBooks = localStorage.getItem('books').split(token)
        document.querySelector('h2').innerText = allBooks[allBooks.length -1]
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(commits => document.querySelector('img').setAttribute('src', commits['message']))
  .catch(err => console.log("error:",err))

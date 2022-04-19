document.querySelector('#finalRose').addEventListener('click', elim)
/*
const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))
*/
const loser = document.querySelectorAll('.no-rose')
function elim(){
	Array.from(loser).forEach(element => element.classList.add('eliminated'))
	setTimeout(hide, 1500)
	document.querySelector('.rose').classList.add('winner')
}

function hide(){
	document.querySelector('#claire').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
}

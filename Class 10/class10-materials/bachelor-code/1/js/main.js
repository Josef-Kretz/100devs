document.querySelector('#finalRose').addEventListener('click', hide)

function hide(){
	window.setTimeout(function(){
		document.querySelector('#claire').style.display = 'none'
		document.querySelector('#sharleen').style.display = 'none'
	}, 1000)
}

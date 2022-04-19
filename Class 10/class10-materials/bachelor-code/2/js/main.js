const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	borderReset()
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
	if(andi.classList.contains('hidden'));
	else {
		document.querySelector('#andiNext').classList.add('cool-border')
	}
}

function claireNext(){
	borderReset()
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
	if(claire.classList.contains('hidden'));
	else {
		document.querySelector('#claireNext').classList.add('cool-border')
	}
}

function sharleenNext(){
	borderReset()
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
	if(sharleen.classList.contains('hidden'));
	else {
		document.querySelector('#sharleenNext').classList.add('cool-border')
	}
}

function borderReset() {
	document.querySelector('#andiNext').classList.remove('cool-border')
	document.querySelector('#sharleenNext').classList.remove('cool-border')
	document.querySelector('#claireNext').classList.remove('cool-border')
}

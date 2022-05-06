//Make an api request using async await
document.querySelector('button').addEventListener('click', flipCoin)

async function flipCoin()
{
  let flip = await fetch('/api?flip')
  flip = await flip.json()

  document.querySelector('h1').innerText = flip.flipped
}

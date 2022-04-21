
let deckID

if(localStorage.getItem('deckID')) deckID = localStorage.getItem('deckID')
else getId()

function getId()
{
  fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        deckID = data.deck_id
        localStorage.setItem('deckID', deckID)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


document.querySelector('button').addEventListener('click', getFetch)

function getFetch()
{
  let url = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if(data.remaining == 0) getId()
        try
        {
          console.log(data);

          let val1 = cardValue(data.cards[0].value)
          let val2 = cardValue(data.cards[1].value)


          document.querySelector('#player1').src = data.cards[0].image
          document.querySelector('#player2').src = data.cards[1].image

          document.querySelector('h3').innerText = val1>val2? "Player 1 Wins" : "Player 2 Wins"
          if(val1 == val2) document.querySelector('h3').innerText = "War"
      }catch(err){
       getId()
        getFetch()
      }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function cardValue(val)
{
  let cardRank = ['2','3','4','5','6','7','8','9','10','JACK','QUEEN','KING','ACE']
  return cardRank.indexOf(val)
}

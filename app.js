document.addEventListener("DOMContentLoaded", () => {

cardArray = [
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
]

// Randomize the cardArray
cardArray.sort(() => 0.5 - Math.random())

chosenCards = []
chosenCardsId = []
grid = document.querySelector('div')

createBoard()

// Functions
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

function flipCard() {
    cardId = this.getAttribute('data-id')
    chosenCardName = cardArray[cardId].name
    chosenCardPath = cardArray[cardId].img
    chosenCards.push(chosenCardName)
    chosenCardsId.push(cardId)
    this.setAttribute('src', chosenCardPath)
    if(chosenCards.length === 2){
        setTimeout(checkForMatch, 500)
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const score = document.querySelector('#result')
    // Check Match
    if(chosenCards[0]===chosenCards[1]){
        // alert("You found a match!")
       cards[chosenCardsId[0]].setAttribute('src', 'images/white.png')
       cards[chosenCardsId[1]].setAttribute('src', 'images/white.png')
       cards[chosenCardsId[0]].removeEventListener('click', flipCard)
       cards[chosenCardsId[1]].removeEventListener('click', flipCard)

       //Update Score
       if(score.textContent == 0){
        score.textContent = 2
       }
        else{
        score.textContent = parseInt(score.textContent) + 2
    }
        if(score.textContent == 12){
            score.textContent = "You won!"
   }
    }
    else {
        // alert("Try again")
        cards[chosenCardsId[0]].setAttribute('src', 'images/blank.png')
        cards[chosenCardsId[1]].setAttribute('src', 'images/blank.png')
    }
    // Clear both Arrays
    chosenCards = []
    chosenCardsId = []
}

});
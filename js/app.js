/*
 * Create a list that holds all of your cards
 */
let cards = [
    "fa-diamond", 
    "fa-paper-plane-o", 
    "fa-anchor", 
    "fa-bolt", 
    "fa-cube", 
    "fa-anchor", 
    "fa-leaf", 
    "fa-bicycle", 
    "fa-diamond",
    "fa-bomb",
    "fa-leaf",
    "fa-bomb",
    "fa-bolt",
    "fa-bicycle",
    "fa-paper-plane-o",
    "fa-cube"
];
cards = shuffle(cards);
console.log(cards);
let cardElems = [];
let cardId = 0;

for (let card of cards) {
    // create a new icon
    let icon = document.createElement("i");
    icon.classList.add("fa", card);
    
    // create a new list item
    let li = document.createElement("li");
    li.classList.add("card");
    li.appendChild(icon);
    li.setAttribute("id", "card" + cardId++);
    li.addEventListener("click", cardClick);
    cardElems.push(li);
}
//console.log(cardElems);


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
let deck = document.querySelector(".deck");
deck.innerHTML = "";
for (let cardElem of cardElems) {
    deck.appendChild(cardElem);
}



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 */
let openCards = [];
let clicks = 0;
let matches = 0;
function cardClick(evt) {
//    - display the card's symbol (put this functionality in another function that you call from this one)
    let cardElem = document.getElementById(evt.target.id);
    cardElem.classList.add("show", "open");
    
//    - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
    openCards.push(cardElem);
    
//    - if the list already has another card, check to see if the two cards match
    if (openCards.length == 2) {
        let firstCard = openCards[0].childNodes[0].className;
        let secondCard = openCards[1].childNodes[0].className;
        
//        + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
        if (firstCard == secondCard) {
            // IT'S A MATCH!
            matches++;
            console.log(`${openCards[0]}, ${openCards[1]}`);
            openCards[0].classList.add("match");
            openCards[1].classList.add("match");
            openCards = [];
        }
        else {
//            + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
            setTimeout(closeCards, 1000)
        };
    }
    
//    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
    
    clicks++;
    document.querySelector(".moves").textContent = clicks;
    
//    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
    if (matches === 8) {
        alert("Game over! You won!");
    }
    
    console.log(openCards); 
}

function closeCards() {
    openCards.map(function(card) {
        card.classList.remove("show", "open");
        openCards = [];
    });
    console.log(openCards);
}













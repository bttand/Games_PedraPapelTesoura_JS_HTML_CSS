let options = ["✌🏻", "🖐🏻", "✊🏻"];

function createOptions(field) {
    for (let i = 0; i < options.length; i++) {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = options[i];
        document.querySelector(field).appendChild(card);
        if (field === '#player-cards') {
            card.onclick = setCardInfield;
        }
    }
}
createOptions('#computer-cards');
createOptions('#player-cards');

let playerField = document.querySelector('#player-cards');
let computerField = document.querySelector('#computer-cards');

let playerCard = document.getElementById("player-infield");
let computerCard = document.getElementById("computer-infield");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function removeEvent() {
    let cards = document.querySelectorAll(".card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].onclick = null;
    }
}

function removeAll() {
    removeAllChildNodes(playerField);
    removeAllChildNodes(computerField);
}

function setCardInfield() {
    let getRandomId = Math.floor(Math.random() * 3);
    playerCard.className = this.className;
    playerCard.innerHTML = this.innerHTML;
    computerCard.className = 'card';
    computerCard.innerHTML = options[getRandomId];
    this.remove();
    child = document.querySelector('#computer-cards>.card');
    child.remove();
    removeEvent();
    setTimeout(() => {
        removeAll(); 
    }, 1000);
    setTimeout(() => {
        createOptions('#computer-cards');
        createOptions('#player-cards');
    }, 1000);
}
let options = ["✌🏻", "🖐🏻", "✊🏻"];

function createOptions(field) {
    for (let i = 0; i < options.length; i++) {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = options[i];
        card.id = `${i}`;
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

let score = document.querySelector('#score-points');
let playerScore = 0;
let computerScore = 0;

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

function updateScore(value) {
    if (value === 1) {
        score.innerText = `Win: ${playerScore} | Lose: ${computerScore}`;
    } 
    if (value === 2){
        score.innerText = "Draw";
    }
}

function checkWinner(playerCardId, computerCardId) {
    if (playerCardId == 0 && computerCardId == 1) {
        playerScore++;
    } else if (playerCardId == 0 && computerCardId == 2) {
        computerScore++;
    } else if (playerCardId == 1 && computerCardId == 2) {
        playerScore++;
    } else if (playerCardId == 1 && computerCardId == 0) {
        computerScore++;
    } else if (playerCardId == 2 && computerCardId == 0) {
        playerScore++;
    } else if (playerCardId == 2 && computerCardId == 1) {
        computerScore++;
    } else {
        updateScore(2); 
    }
}

function checkVictory() {
    if (playerScore >= 10) {
        alert("Parabéns, você ganhou!!");
        window.location.reload();
    } else if (computerScore >= 10) {
        alert("Você perdeu, tente novamente!!");
        window.location.reload();
    }
}

function setCardInfield() {
    let getRandomId = Math.floor(Math.random() * 3);
    playerCard.className = this.className;
    playerCard.innerHTML = this.innerHTML;
    playerCard.id = this.id;
    computerCard.className = 'card';
    computerCard.innerHTML = options[getRandomId];
    this.remove();
    child = document.querySelector('#computer-cards>.card');
    child.remove();
    removeEvent();
    checkWinner(playerCard.id, getRandomId);
    setTimeout(() => {
        removeAll(); 
    }, 500);
    setTimeout(() => {
        createOptions('#computer-cards');
        createOptions('#player-cards');
        updateScore(1);
        checkVictory();
    }, 500);
}
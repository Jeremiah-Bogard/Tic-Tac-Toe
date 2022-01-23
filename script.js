var currentPlayer = "X";

var cards = document.getElementsByClassName("card");

var waysToWin = [
  [1, 2, 3],
  [1, 5, 9],
  [1, 4, 7],
  [4, 5, 6],
  [2, 5, 8],
  [3, 5, 7]
];

function checkForWinner() {
  
  for(var i = 0; i < waysToWin.length; i++) {
    
    var index = waysToWin[i];
      
    var card1 = cards[index[0]-1].textContent;
    var card2 = cards[index[1]-1].textContent;
    var card3 = cards[index[2]-1].textContent;
      
    if(card1 === card2 && card2 === card3 && card1 !== "" && card2 !== "" && card3 !== "") {
      var winnerIs = card1 || card2 || card3;
      
      alert("Player " + winnerIs + " Wins!!!!");
    }

  }
  
}

function updatePlayer() {
  
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  
  document.getElementById("playerTurn").innerText = currentPlayer;
  
}

function updateCard(card) {
  
  if(card.innerText === "") {
    
    card.innerText = currentPlayer;
    updatePlayer();
    checkForWinner();
    return;
    
  }
  
  alert("Incorrect Move\nPlease try a different spot")
  
}

for(var i = 0; i < cards.length; i++) {
  
  cards[i].addEventListener("click", function() {
    updateCard(this);
  });
  
}

function reset() {
  
  for(var i = 0; i < cards.length; i++) {
    
    cards[i].innerText = "";
    
  }
  
  if(currentPlayer === "O") {
    updatePlayer();
  }
  
}

var resetBttn = document.getElementById("reset");

resetBttn.addEventListener("click", reset);

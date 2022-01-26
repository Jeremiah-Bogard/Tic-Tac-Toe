var currentPlayer = "X";

var cards = document.getElementsByClassName("card");

var haveWinner = false;

/*
1 2 3
4 5 6
7 8 9
*/
var waysToWin = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
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
      
      document.getElementById("mssg").innerText = "Player " + winnerIs + " Wins!!!!";
      haveWinner = true;
      
    } else {
      
      var card1 = cards[0].textContent;
      var card2 = cards[1].textContent;
      var card3 = cards[2].textContent;
      var card4 = cards[3].textContent;
      var card5 = cards[4].textContent;
      var card6 = cards[5].textContent;
      var card7 = cards[6].textContent;
      var card8 = cards[7].textContent;
      var card9 = cards[8].textContent;
      
      if(card1 !== "" && card2 !== "" && card3 !== "" && card4 !== "" && card5 !== "" && card6 !== "" && card7 !== "" && card8 !== "" && card9 !== "") {
      
        document.getElementById("mssg").innerText = "It's a Tie!!!";
        
      }
      
    }

  }
  
}

function updatePlayer() {
  
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  
  document.getElementById("playerTurn").innerText = currentPlayer;
  
}

function updateCard(card) {
  
  if(card.innerText === "" && !haveWinner) {
    
    card.innerText = currentPlayer;
    updatePlayer();
    checkForWinner();
    return;
    
  }
  
  document.getElementById("warning").style.height = "100vh";
  
    setTimeout(function() {
      document.getElementById("warning").style.height = "0";
  }, 2000);
  
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
  
  document.getElementById("mssg").innerHTML = "It's player <span id='playerTurn'>X</span>'s turn!";
  
  if(currentPlayer === "O") {
    updatePlayer();
  }
  
  haveWinner = false;
  
}

var resetBttn = document.getElementById("reset");

resetBttn.addEventListener("click", reset);

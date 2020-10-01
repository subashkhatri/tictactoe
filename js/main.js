
function hasAWinner() {
  var win = false;
  var playerSelections = [];
  playerSelections =
    currentPlayer == 0 ? playerFirstSelections : playerSecondSelections;
  if (playerSelections.length >= boardSize) {
    // setting winners from its length
    for (sets = 0; sets < winners.length; sets++) {
      var setWinner = winners[sets];
      var setFound = true;
      for (rowIndex = 0; rowIndex < setWinner.length; rowIndex++) {
        var found = false;
        for (s = 0; s < playerSelections.length; s++) {
          if (setWinner[rowIndex] == playerSelections[s]) {
            found = true;
            break;
          }
        }
        if (found == false) {
          setFound = false;
          break;
        }
      }
      if (setFound == true) {
        win = true;
        break;
      }
    }
  }
  return win;
}

//Reset function
function reset() {
  currentPlayer = 0;
  playerFirstSelections = [];
  playerSecondSelections = [];
}
window.addEventListener('load', drawBoard);


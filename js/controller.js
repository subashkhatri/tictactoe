
function hasAWinner() {
  this.win = false;
  this.playerSelections = [];
  this.playerSelections =
    currentPlayer == 0 ? playerFirstSelections : playerSecondSelections;
  if (this.playerSelections.length >= boardSize) {
    // setting winners from its length
    for (sets = 0; sets < winners.length; sets++) {
      this.setWinner = winners[sets];
      this.setFound = true;
      for (rowIndex = 0; rowIndex < setWinner.length; rowIndex++) {
         this.found = false;
        for (s = 0; s < this.playerSelections.length; s++) {
          if (this.setWinner[rowIndex] == this.playerSelections[s]) {
            this.found = true;
            break;
          }
        }
        if (this.found == false) {
          this.setFound = false;
          break;
        }
      }
      if (this.setFound == true) {
        this.win = true;
        break;
      }
    }
  }
  return this.win;
}




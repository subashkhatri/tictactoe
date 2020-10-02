function setValueForRowAndColumn(){
  var valueForRow = 1;
  var valueForColumn = 1;

  for (j = 0; j < boardSize; j++) {
    //for pushing rows into winners array
    this.rowIndex = [];
    //i = rowNum
    for (i = 0; i < boardSize; i++) {
      this.rowIndex.push(valueForRow);
      valueForRow++;
    }
    // console.log(this.rowIndex);
    winners.push(this.rowIndex);
    //for pushing columns into winners array
    this.columnIndex = [];
    this.tempvalueForColumn = valueForColumn;
    //i = colNum
    for (i = 0; i < boardSize; i++) {
      this.columnIndex.push(this.tempvalueForColumn);
      this.tempvalueForColumn += boardSize;
    }
    winners.push(this.columnIndex);
    valueForColumn++;
  }

}
function setValueForDiagonals(){
  var valueForDiagonal = 1;  
  this.diagonalIndexOne = [];
  // l = Digonal Num
  for (l = 0; l < boardSize; l++) {
    this.diagonalIndexOne.push(valueForDiagonal);
    valueForDiagonal += boardSize + 1;
  }
  winners.push(this.diagonalIndexOne);
  valueForDiagonal = boardSize;
  this.diagonalIndexTwo = [];
  // l = Digonal Num
  for (l = 0; l < boardSize; l++) {
    this.diagonalIndexTwo.push(valueForDiagonal);
    valueForDiagonal += boardSize - 1;
  }
  winners.push(this.diagonalIndexTwo);

}

function setWinnerCombination() {  
  setValueForRowAndColumn();
  setValueForDiagonals();  
}

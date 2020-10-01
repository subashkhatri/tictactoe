function setValueForRowAndColumn(){
  var valueForRow = 1;
  var valueForColumn = 1;

  for (j = 0; j < boardSize; j++) {
    //for pushing rows into winners array
    var rowIndex = [];
    //i = rowNum
    for (i = 0; i < boardSize; i++) {
      rowIndex.push(valueForRow);
      valueForRow++;
    }
    console.log(rowIndex);
    winners.push(rowIndex);
    //for pushing columns into winners array
    var columnIndex = [];
    var tempvalueForColumn = valueForColumn;
    //i = colNum
    for (i = 0; i < boardSize; i++) {
      columnIndex.push(tempvalueForColumn);
      tempvalueForColumn += boardSize;
    }
    winners.push(columnIndex);
    valueForColumn++;
  }

}
function setValueForDiagonals(){
  var valueForDiagonal = 1;  
  var diagonalIndexOne = [];
  // l = Digonal Num
  for (l = 0; l < boardSize; l++) {
    diagonalIndexOne.push(valueForDiagonal);
    valueForDiagonal += boardSize + 1;
  }
  winners.push(diagonalIndexOne);
  valueForDiagonal = boardSize;
  var diagonalIndexTwo = [];
  // l = Digonal Num
  for (l = 0; l < boardSize; l++) {
    diagonalIndexTwo.push(valueForDiagonal);
    valueForDiagonal += boardSize - 1;
  }
  winners.push(diagonalIndexTwo);

}

function setWinnerCombination() {  
  setValueForRowAndColumn();
  setValueForDiagonals();  
}

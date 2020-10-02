//setting global Varaible
var winners = [];
var playerFirstSelections = [];
var playerSecondSelections = [];
var currentPlayer = 0;
var mark = '';
var x = prompt('Please enter value over 3'); //input from user
var boardSize = parseInt(x);

function setParentIdToChild(parent) {
  this.parent = parent;
  while (this.parent.hasChildNodes()) {
    this.parent.removeChild(this.parent.firstChild);
  }
}

function createRowAndColumnInBoard() {
    this.setColumn = 1; //local varaible for setting column
  for (size = 0; size < boardSize; size++) {
    // adding row from the input
     this.row = document.createElement('tr');
    for (rowIndex = 0; rowIndex < boardSize; rowIndex++) {
      // adding column as per row..here row=column
      this.column = document.createElement('td');
      this.column.id = this.setColumn; // setting col.id = 1;
      this.column.addEventListener('click', setHandler);
      row.appendChild(this.column);
      this.setColumn++;
    }
    this.parent.appendChild(this.row);
  }
}

// Main Function for drawing a Board
function drawBoard() {
  var parent = document.getElementById('play-board');
  setParentIdToChild(parent);
  //creates Row and Column of board
  createRowAndColumnInBoard();
  setWinnerCombination();
  setHoverEffect();
  console.log(winners);
}

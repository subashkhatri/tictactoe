//setting global Varaible
var winners = [];
var playerFirstSelections = [];
var playerSecondSelections = [];
var currentPlayer = 0;
var parent;
var mark = '';
var x = prompt('Please enter value over 3'); //input from user
var boardSize = parseInt(x);

function setParentIdToChild(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}

function createRowAndColumnInBoard() {
  var setColumn = 1; //local varaible for setting column
  for (size = 0; size < boardSize; size++) {
    // adding row from the input
    var row = document.createElement('tr');
    for (rowIndex = 0; rowIndex < boardSize; rowIndex++) {
      // adding column as per row..here row=column
      var column = document.createElement('td');
      column.id = setColumn; // setting col.id = 1;
      column.addEventListener('click', setHandler);
      row.appendChild(column);
      setColumn++;
    }
    parent.appendChild(row);
  }
}

// Main Function for drawing a Board
function drawBoard() {
  parent = document.getElementById('play-board');
  setParentIdToChild(parent);
  //creates Row and Column of board
  createRowAndColumnInBoard();
  setWinnerCombination();
  setHoverEffect();
  console.log(winners);
}

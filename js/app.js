//setting global Varaible
var winners = [];
var playerFirstSelections = [];
var playerSecondSelections = [];
var currentPlayer = 0;
var mark = '';
var x = prompt('Please enter value over 3'); //input from user
var boardSize = parseInt(x);

function setParentIdToChild(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}
// Function for drawing a Board
function drawBoard() {
  var parent;
  parent = document.getElementById('play-board');
  var setColumn = 1; //local varaible for setting column
  //while creates a loop with given boardSize for eg = 3 and until we reload the window the board boardSize of the game will be 3 * 3
  setParentIdToChild(parent);
  //drawing the board
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
  setWinnerCombination();
  setHoverEffect();
  console.log(winners);
}

// returns array of Winner Combination
// (3) [1, 2, 3]0: 1 1: 2 2: 3 length: 3
// (3) [4, 5, 6]0: 4 1: 5 2: 6 length: 3
// (3) [7, 8, 9]0: 7 1: 8 2: 9 length: 3
function setWinnerCombination() {
  var valueForRow = 1;
  var valueForColumn = 1;
  var valueForDiagonal = 1;
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

// retruns if it has winner or not?
function hasAWinner() {
  var win = false;
  var playerSelections = [];
  playerSelections = currentPlayer == 0 ? playerFirstSelections : playerSecondSelections;
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

// hover function for displaying the turn of player1 and player 2
function setHoverEffect() {
  $('table td').mouseover(function () {
    console.log(mark);
    if (mark == 'o') {
      removeAClass();
      if (!$(this).hasClass('disable')) {
        $(this).addClass('omark');
      }
    } else {
      removeAClass();

      if (!$(this).hasClass('disable')) {
        $(this).addClass('xmark');
      }
    }
  });
  $('table td').mouseout(function () {
    console.log('out');
    removeAClass();
  });
}

// function for setting the handler that places each player turn on the board cell
var setHandler = function (e) {
  if (currentPlayer == 0) {
    this.innerHTML = 'X';
    mark = 'o';
    playerFirstSelections.push(parseInt(this.id));
    playerFirstSelections.sort(function (a, b) {
      return a - b; // sorting in accending order
    });
    this.classList.add('x', 'disable');
    $('.x').removeClass('xmark');
  } else {
    this.innerHTML = 'O';
    mark = 'x';
    playerSecondSelections.push(parseInt(this.id));
    playerSecondSelections.sort(function (a, b) {
      return a - b; // sorting in accending order
    });
    this.classList.add('o', 'disable');
    $('.o').removeClass('omark');
  }
  // check whether if it has a  Winner
  if (hasAWinner()) {
    if (currentPlayer == 0) {
      alert('X Wins the game');

    } else {
      alert('O Wins the game');
    }
    //  whether X wins or O wins;
    reset();
    drawBoard();
  } else if (
    playerSecondSelections.length + playerFirstSelections.length ==
    boardSize * boardSize
  ) {
    alert(' Its a tie');
    reset();
    drawBoard();
  } else {
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    this.removeEventListener('click', arguments.callee);
  }
};
// remove classes and attributes of .omark and .xmark
function removeAClass() {
  $('table td, .x, .o').removeClass('omark xmark');
}
window.addEventListener('load', drawBoard);
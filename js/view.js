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



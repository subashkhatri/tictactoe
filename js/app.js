var winners = new Array();
var player1Selections = new Array();
var player2Selections = new Array();

var currentPlayer = 0;
var mark = '';

var x = prompt('Please enter value over 3');
var boardSize = parseInt(x);

// Function for drawing a Board
function drawBoard() {
  var parent;

  parent = document.getElementById('play-board');
  var counter = 1;

  //while creates a loop with given boardSize for eg = 3 and until we reload the window the board boardSize of the game will be 3 * 3 

  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
  // creating rows and column 
  for (size = 0; size < boardSize; size++) {
    var row = document.createElement('tr');
    for (r = 0; r < boardSize; r++) {
      var column = document.createElement('td');
      column.id = counter; // setting col.id = 1;
      column.addEventListener('click', setHandler);
      row.appendChild(column);
      counter++;
    }
    parent.appendChild(row);

  }
  // calling setWinnerComination function
  setWinnerCombination();
  // adding hover effects by colling function set hover effect
  setHoverEffect();
  console.log(winners);
}

// returns array of Winner Combination 
// (3) [1, 2, 3]0: 1 1: 2 2: 3 length: 3
// (3) [4, 5, 6]0: 4 1: 5 2: 6 length: 3
// (3) [7, 8, 9]0: 7 1: 8 2: 9 length: 3
function setWinnerCombination() {
  var value_in_row = 1;
  var value_in_column = 1;
  var value_in_diagonal = 1;
  for (j = 0; j < boardSize; j++) {
    //for pushing rows into winners array
    var rowIndex = [];
    //i = rowNum
    for (i = 0; i < boardSize; i++) {
      rowIndex.push(value_in_row);
      value_in_row++;
    }
    console.log(rowIndex);
    winners.push(rowIndex);
    //for pushing columns into winners array
    var columnIndex = [];
    var temp_column_value = value_in_column;
    //i = colNum
    for (i = 0; i < boardSize; i++) {
      columnIndex.push(temp_column_value);
      temp_column_value += boardSize;
    }
    winners.push(columnIndex);
    value_in_column++;
  }
  var diagonalIndexOne = [];
  // l = Digonal Num
  for (l = 0; l < boardSize; l++) {
    diagonalIndexOne.push(value_in_diagonal);
    value_in_diagonal += boardSize + 1;
  }
  winners.push(diagonalIndexOne);
  value_in_diagonal = boardSize;
  var diagonalIndexTwo = [];
  // l = Digonal Num
  for (l = 0; l < boardSize; l++) {
    diagonalIndexTwo.push(value_in_diagonal);
    value_in_diagonal += boardSize - 1;
  }
  winners.push(diagonalIndexTwo);
}
// retruns if it has winner or not?
function hasAWinner() {
  var win = false;
  var playerSelections = new Array();
  playerSelections = currentPlayer == 0 ? player1Selections : player2Selections;
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


function reset() {
  currentPlayer = 0;
  player1Selections = new Array();
  player2Selections = new Array();
  changeClassOfPlayersAfterClick();
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
    // document.getElementById('player1').style.color = 'red';

    player1Selections.push(parseInt(this.id));
    player1Selections.sort(function (a, b) {
      return a - b; // sorting in accending order
    });

    this.classList.add('x');
    this.classList.add('disable');
    $('.x').removeClass('xmark');

    changeClassOfPlayersAfterClick();

    //adding the id of selected next player
  } else {
    this.innerHTML = 'O';
    mark = 'x';
    player2Selections.push(parseInt(this.id));
    player2Selections.sort(function (a, b) {
      return a - b; // sorting in accending order
    });
    this.classList.add('o');
    this.classList.add('disable');
    $('.o').removeClass('omark');
    changeClassOfPlayersAfterClick();
  }
  // check whether if it has a  Winner
  if (hasAWinner()) {
    if (currentPlayer == 0) {
      alert('X wins');
    } else {
      alert('0 wins');
    }
    reset();
    drawBoard();
  } else if (
    player2Selections.length + player1Selections.length ==
    boardSize * boardSize
  ) {
    alert(' Its a tie');
    reset();
    drawBoard();
  } else {
    if (currentPlayer == 0) {
      //pointer code
      currentPlayer = 1;
    } else {
      currentPlayer = 0;
    }
    this.removeEventListener('click', arguments.callee);
  }
};

// remove classes and attributes of .omark and .xmark
function removeAClass() {
  $('.x').removeClass('omark');
  $('.o').removeClass('xmark');

  $('table td').removeClass('omark');
  $('table td').removeClass('xmark');

}

//add and remove class of player1 and player 2
function changeClassOfPlayersAfterClick() {
  $('#player1, #player2').click(function () {
    $(this).removeClass('selected');
    $(this).addClass('selected');

  });
}



window.addEventListener('load', drawBoard);
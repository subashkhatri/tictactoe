var winners = new Array();
var player1Selections = new Array();
var player2Selections = new Array();

var numberOfPlayers = 2;
var currentPlayer = 0;
var mark = '';

function getSize() {
  var x = prompt('Please enter value over 3');
  var size = parseInt(x);

  return size;
}
var size = getSize();

function drawBoard() {
  var Parent = document.getElementById('play-board');
  var counter = 1;

  while (Parent.hasChildNodes()) {
    Parent.removeChild(Parent.firstChild);
  }
  for (s = 0; s < size; s++) {
    var row = document.createElement('tr');
    for (r = 0; r < size; r++) {
      var col = document.createElement('td');
      col.id = counter; // setting col.id = 1;
      var handler = function (e) {
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
          d('player1').classList.remove('selected'); //removeing the id of player which is selected
          d('player2').classList.add('selected'); //adding the id of selected next player
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
          d('player1').classList.add('selected');
          d('player2').classList.remove('selected');
        }
        // check Winner and add the points
        if (checkWinner()) {
          if (currentPlayer == 0) {
            alert('X wins');
          } else {
            alert('0 wins');
          }
          reset();
          drawBoard();
        } else if (
          player2Selections.length + player1Selections.length ==
          size * size
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
      col.addEventListener('click', handler);
      row.appendChild(col);
      counter++;
    }
    Parent.appendChild(row);
  }
  loadAnswers();
  hover();
  console.log(winners);
}

function d(id) {
  var el = document.getElementById(id);
  return el;
}

function reset() {
  currentPlayer = 0;
  player1Selections = new Array();
  player2Selections = new Array();
  d('player1').classList.add('selected'); // selecting player 1 by passing the the ID
  d('player2').classList.remove('selected');
}

function loadAnswers() {
  var i = 0;
  var regularcount = 1;
  var colval = 1;
  var diagval = 1;
  for (j = 0; j < size; j++) {
    //for pushing rows into winners array
    var arr = [];
    for (i = 0; i < size; i++) {
      arr.push(regularcount);
      regularcount++;
    }
    console.log(arr);
    winners.push(arr);
    //for pushing columns into winners array
    var arr2 = [];
    var tempcolval = colval;
    for (i = 0; i < size; i++) {
      arr2.push(tempcolval);
      tempcolval = tempcolval + size;
    }
    winners.push(arr2);
    colval++;
  }
  var arr3 = [];
  for (l = 0; l < size; l++) {
    arr3.push(diagval);
    diagval += size + 1;
  }
  winners.push(arr3);
  diagval = size;
  var arr4 = [];
  for (l = 0; l < size; l++) {
    arr4.push(diagval);
    diagval += size - 1;
  }
  winners.push(arr4);
}

function checkWinner() {
  var win = false;
  var playerSelections = new Array();
  if (currentPlayer == 0) {
    playerSelections = player1Selections;
  } else {
    playerSelections = player2Selections;
  }
  if (playerSelections.length >= size) {
    for (i = 0; i < winners.length; i++) {
      var sets = winners[i];
      var setFound = true;
      for (r = 0; r < sets.length; r++) {
        var found = false;
        for (s = 0; s < playerSelections.length; s++) {
          if (sets[r] == playerSelections[s]) {
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
// hover function for displaying the turn of player1 and player 2
function hover() {
  $('table td').mouseover(function () {
    console.log(mark);
    if (mark == 'o') {
      $('.x').removeClass('omark');
      $('.o').removeClass('xmark');
      if (!$(this).hasClass('disable')) {
        $(this).addClass('omark');
      }
    } else {
      $('.x').removeClass('omark');
      $('.o').removeClass('xmark');
      if (!$(this).hasClass('disable')) {
        $(this).addClass('xmark');
      }
    }
  });
  $('table td').mouseout(function () {
    console.log('out');
    $('table td').removeClass('omark');
    $('table td').removeClass('xmark');
  });
}

window.addEventListener('load', drawBoard);
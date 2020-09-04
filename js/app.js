var winners = new Array();
var player1Selections = new Array();
var player2Selections = new Array();

var numberOfPlayers = 2;
var currentPlayer = 0;
var move = 0;
var points1 = 0;
var points2 = 0;

function getSize() {
  var x = prompt('Please enter value over 3');
  var size = parseInt(x);
  return size;
}
var size = getSize();

function drawBoard() {
  var Parent = document.getElementById('game');
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
          player1Selections.push(parseInt(this.id));
          player1Selections.sort(function (a, b) {
            return a - b; // sorting in accending order
          });
          d('player1').classList.remove('selected'); //removeing the id of player which is selected
          d('player2').classList.add('selected'); //adding the id of selected next player
        } else {
          this.innerHTML = 'O';
          player2Selections.push(parseInt(this.id));
          player2Selections.sort(function (a, b) {
            return a - b; // sorting in accending order
          });
          d('player1').classList.add('selected');
          d('player2').classList.remove('selected');
        }
        // check Winner and add the points
        if (checkWinner()) {
          if (currentPlayer == 0) {
            points1++;
          } else {
            points2++;
          }
          document.getElementById('player1').innerHTML = points1;
          document.getElementById('player2').innerHTML = points2;
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

function loadAnswers() {}

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
window.addEventListener('load', drawBoard);
/*$(document).ready(function () {
    $(document).on('click','#submit',function () {
        size=document.getElementById('size').value;
    })
});*/

// $(document).ready(function () {
//   var x = 'x';
//   var o = 'o';
//   var turns = 0;
//   var mark = 'O';

//   var move1 = $('#move1');
//   var move2 = $('#move2');
//   var move3 = $('#move3');
//   var move4 = $('#move4');
//   var move5 = $('#move5');
//   var move6 = $('#move6');
//   var move7 = $('#move7');
//   var move8 = $('#move8');
//   var move9 = $('#move9');

//   $('#play-board li').mouseover(function () {
//     if (mark == 'O') {
//       $('.mark').removeClass('omark');
//       $('.mark').removeClass('xmark');
//       if (!$(this).hasClass('disable')) {
//         $(this).addClass('omark');
//       }
//     } else {
//       $('.mark').removeClass('omark');
//       $('.mark').removeClass('xmark');
//       if (!$(this).hasClass('disable')) {
//         $(this).addClass('xmark');
//       }
//     }
//   });
//   $('#play-board li').mouseout(function () {
//     $('.mark').removeClass('omark');
//     $('.mark').removeClass('xmark');
//   });

//   function checkWinner(item) {
//     return (
//       (move1.hasClass(item) && move2.hasClass(item) && move3.hasClass(item)) ||
//       (move4.hasClass(item) && move5.hasClass(item) && move6.hasClass(item)) ||
//       (move7.hasClass(item) && move8.hasClass(item) && move9.hasClass(item)) ||
//       (move1.hasClass(item) && move4.hasClass(item) && move7.hasClass(item)) ||
//       (move2.hasClass(item) && move5.hasClass(item) && move8.hasClass(item)) ||
//       (move3.hasClass(item) && move6.hasClass(item) && move9.hasClass(item)) ||
//       (move1.hasClass(item) && move5.hasClass(item) && move9.hasClass(item)) ||
//       (move3.hasClass(item) && move5.hasClass(item) && move7.hasClass(item))
//     );
//   }

//   function resetBoard() {
//     $('#play-board li').text(' ');
//     $('#play-board li').removeClass('disable');
//     $('#play-board li').removeClass('o');
//     $('#play-board li').removeClass('x');
//   }
//   $('#play-board li').on('click', function () {
//     if (checkWinner('o')) {
//       alert('Winner: P1');
//       resetBoard();
//     } else if (checkWinner('x')) {
//       alert('Winner: P2');
//       resetBoard();
//     } else if (turns == 9) {
//       alert('Tie Game. Play again');
//       resetBoard();
//       turns = 0;
//     } else if ($(this).hasClass('disable')) {
//       alert('This place is already filled');
//     } else if (turns % 2 == 0) {
//       turns++;
//       mark = 'X';
//       $('.mark').removeClass('omark');
//       $('.mark').removeClass('xmark');
//       $(this).text(o);
//       $(this).addClass('disable o');

//       if (checkWinner('o')) {
//         alert('Winner: P1');
//         turns = 0;
//       }
//     } else {
//       turns++;
//       mark = 'O';
//       $('.mark').removeClass('omark');
//       $('.mark').removeClass('xmark');

//       $(this).text(x);
//       $(this).addClass('disable x');
//       if (checkWinner('x')) {
//         alert('Winner: P2');
//         turns = 0;
//       }
//     }
//   });

//   $('#replay').on('click', function () {
//     resetBoard();
//     turns = 0;
//   });
// });

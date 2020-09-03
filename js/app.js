var winnners = [];
var player1Selections = [];
var player2Selections = [];
var numberOfPlayers = 2;
var currentPlayer = 0;
var move = 0;
var points1 = 0; // points for player 1
var points2 = 0; // points for player 2
var size = 3;

function drawBoard() {
  var Parent = document.getElementById('play-board');
}
function d(id) {
  var element = document.getElementById(id);
  return element;
}
function reset() {}
function loadAnswers() {}

function checkWinner() {}

window.addEventListener('load', drawBoard);

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

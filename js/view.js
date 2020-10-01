

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


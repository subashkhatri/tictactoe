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

$(document).ready(function () {
  var x = "x";
  var o = "o";
  var turns = 0;

  var move1 = $('#move1');
  var move2 = $('#move2');
  var move3 = $('#move3');
  var move4 = $('#move4');
  var move5 = $('#move5');
  var move6 = $('#move6');
  var move7 = $('#move7');
  var move8 = $('#move8');
  var move9 = $('#move9');
  $('#play-board li').on('click', function () {
    if (move1.hasClass('o') && move2.hasClass('o') && move3.hasClass('o') ||
      move4.hasClass('o') && move5.hasClass('o') && move6.hasClass('o') ||
      move7.hasClass('o') && move8.hasClass('o') && move9.hasClass('o') ||
      move1.hasClass('o') && move4.hasClass('o') && move7.hasClass('o') ||
      move2.hasClass('o') && move5.hasClass('o') && move8.hasClass('o') ||
      move3.hasClass('o') && move6.hasClass('o') && move9.hasClass('o') ||
      move1.hasClass('o') && move5.hasClass('o') && move9.hasClass('o') ||
      move3.hasClass('o') && move5.hasClass('o') && move7.hasClass('o')

    ) {

      alert('Winner: P1');
      $('#play-board li').text(' ');
      $('#play-board li').removeClass('disable');
      $('#play-board li').removeClass('o');
      $('#play-board li').removeClass('x');

    } else if (move1.hasClass('x') && move2.hasClass('x') && move3.hasClass('x') ||
      move4.hasClass('x') && move5.hasClass('x') && move6.hasClass('x') ||
      move7.hasClass('x') && move8.hasClass('x') && move9.hasClass('x') ||
      move1.hasClass('x') && move4.hasClass('x') && move7.hasClass('x') ||
      move2.hasClass('x') && move5.hasClass('x') && move8.hasClass('x') ||
      move3.hasClass('x') && move6.hasClass('x') && move9.hasClass('x') ||
      move1.hasClass('x') && move5.hasClass('x') && move9.hasClass('x') ||
      move3.hasClass('x') && move5.hasClass('x') && move7.hasClass('x')

    ) {

      alert('Winner: P2');
      $('#play-board li').text(' ');
      $('#play-board li').removeClass('disable');
      $('#play-board li').removeClass('o');
      $('#play-board li').removeClass('x');

    } else if (turns == 9) {
      alert('Tie Game. Play again');
      $('#play-board li').text(' ');
      $('#play-board li').removeClass('disable');
      $('#play-board li').removeClass('o');
      $('#play-board li').removeClass('x');
      turns = 0;
    } else if ($(this).hasClass('disable')) {
      alert('This place is already filled');
    } else if (turns % 2 == 0) {
      turns++;
      $(this).text(o);
      $(this).addClass('disable o');
      if (move1.hasClass('o') && move2.hasClass('o') && move3.hasClass('o') ||
        move4.hasClass('o') && move5.hasClass('o') && move6.hasClass('o') ||
        move7.hasClass('o') && move8.hasClass('o') && move9.hasClass('o') ||
        move1.hasClass('o') && move4.hasClass('o') && move7.hasClass('o') ||
        move2.hasClass('o') && move5.hasClass('o') && move8.hasClass('o') ||
        move3.hasClass('o') && move6.hasClass('o') && move9.hasClass('o') ||
        move1.hasClass('o') && move5.hasClass('o') && move9.hasClass('o') ||
        move3.hasClass('o') && move5.hasClass('o') && move7.hasClass('o')

      ) {
        alert('Winner: P1');
        turns = 0;
      }
    } else {
      turns++;
      $(this).text(x);
      $(this).addClass('disable x');
      if (move1.hasClass('x') && move2.hasClass('x') && move3.hasClass('x') ||
        move4.hasClass('x') && move5.hasClass('x') && move6.hasClass('x') ||
        move7.hasClass('x') && move8.hasClass('x') && move9.hasClass('x') ||
        move1.hasClass('x') && move4.hasClass('x') && move7.hasClass('x') ||
        move2.hasClass('x') && move5.hasClass('x') && move8.hasClass('x') ||
        move3.hasClass('x') && move6.hasClass('x') && move9.hasClass('x') ||
        move1.hasClass('x') && move5.hasClass('x') && move9.hasClass('x') ||
        move3.hasClass('x') && move5.hasClass('x') && move7.hasClass('x')

      ) {
        alert('Winner: P2');
        turns = 0;
      }
    }
  });

  $('#replay').on('click', function () {
    $('#play-board li').text(' ');
    $('#play-board li').removeClass('disable');
    $('#play-board li').removeClass('o');
    $('#play-board li').removeClass('x');
    turns = 0;
  });
});
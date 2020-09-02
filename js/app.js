$(document).ready(function () {
  var x = 'x';
  var o = 'o';
  var turns = 0;
  var mark = 'O';

  var move1 = $('#move1');
  var move2 = $('#move2');
  var move3 = $('#move3');
  var move4 = $('#move4');
  var move5 = $('#move5');
  var move6 = $('#move6');
  var move7 = $('#move7');
  var move8 = $('#move8');
  var move9 = $('#move9');

  $('#play-board li').mouseover(function () {
    if (mark == 'O') {
      $('.mark').removeClass('omark');
      $('.mark').removeClass('xmark');
      if (!$(this).hasClass('disable')) {
        $(this).addClass('omark');
      }
    } else {
      $('.mark').removeClass('omark');
      $('.mark').removeClass('xmark');
      if (!$(this).hasClass('disable')) {
        $(this).addClass('xmark');
      }
    }
  });
  $('#play-board li').mouseout(function () {
    $('.mark').removeClass('omark');
    $('.mark').removeClass('xmark');
  });
  function checkWinner(item) {
    return (
      (move1.hasClass(item) && move2.hasClass(item) && move3.hasClass(item)) ||
      (move4.hasClass(item) && move5.hasClass(item) && move6.hasClass(item)) ||
      (move7.hasClass(item) && move8.hasClass(item) && move9.hasClass(item)) ||
      (move1.hasClass(item) && move4.hasClass(item) && move7.hasClass(item)) ||
      (move2.hasClass(item) && move5.hasClass(item) && move8.hasClass(item)) ||
      (move3.hasClass(item) && move6.hasClass(item) && move9.hasClass(item)) ||
      (move1.hasClass(item) && move5.hasClass(item) && move9.hasClass(item)) ||
      (move3.hasClass(item) && move5.hasClass(item) && move7.hasClass(item))
    );
  }

  $('#play-board li').on('click', function () {
    if (checkWinner('o')) {
      alert('Winner: P1');
      $('#play-board li').text(' ');
      $('#play-board li').removeClass('disable');
      $('#play-board li').removeClass('o');
      $('#play-board li').removeClass('x');
    } else if (checkWinner('x')) {
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
      mark = 'X';
      $('.mark').removeClass('omark');
      $('.mark').removeClass('xmark');
      $(this).text(o);
      $(this).addClass('disable o');

      if (checkWinner('o')) {
        alert('Winner: P1');
        turns = 0;
      }
    } else {
      turns++;
      mark = 'O';
      $('.mark').removeClass('omark');
      $('.mark').removeClass('xmark');

      $(this).text(x);
      $(this).addClass('disable x');
      if (checkWinner('x')) {
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

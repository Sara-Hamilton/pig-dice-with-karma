import { Player } from './player';
import { switchTurn } from './player';
import { roll } from './player';
import { updateScores } from './player';
import { animateDice } from './player';

var player1 = new Player("bill");
var player2 = new Player("bob");
var player = player1;

$(document).ready(function() {
  $("#roll").click(function() {
    animateDice();
    var newRoll = roll();
    player.addRunning(newRoll);
    if (newRoll === 1) {
      player.running = 0;
      player.total = player.score;
      player = switchTurn(player1, player2, player);
    }

    updateScores(player1, player2);

    if (player.total >= 100) {
      $("#result").text("WINNER!!!!");
      $("#result").fadeIn();
      $("#game").hide();
      return;
    }

  })
  $("#hold").click(function() {
    player.addScore();
    updateScores(player1, player2);
    player = switchTurn(player1, player2, player);
  })
});

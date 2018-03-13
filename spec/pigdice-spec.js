import { Player } from './../js/player.js';
import { switchTurn } from './../js/player.js';
import { roll } from './../js/player.js';
import { updateScores } from './../js/player.js';
import { animateDice } from './../js/player.js';

describe('Player', function() {
    var reusablePlayer;

  beforeEach(function() {
    reusablePlayer = new Player("Dave");
  });

  it('will show addRunning() adjusting the total score', function() {
    reusablePlayer.addRunning(5);
    expect(reusablePlayer.total).toEqual(5);
    reusablePlayer.addRunning(3);
    expect(reusablePlayer.total).toEqual(8);
  });

  it("will show addScore() adjusting total score", function() {
    reusablePlayer.running = 5;
    reusablePlayer.addScore();
    expect(reusablePlayer.total).toEqual(5);
  });

});

describe('roll', function() {
  it('roll generates a number less than 7', function() {
    var number = roll();
    expect(number).toBeLessThan(7);
    expect(number).toBeGreaterThan(0);
    expect(number).not.toBeNull();
  });
});

describe('switchTurn', function() {
  it('switches from player 1 to player 2', function() {
    var player1 = new Player("bill");
    var player2 = new Player("bob");
    var currentPlayer = player1;
    var nextPlayer = switchTurn(player1, player2, currentPlayer);
    expect(nextPlayer).toEqual(player2);
  });

  it('switches from player 2 to player 1', function() {
    var player1 = new Player("jim");
    var player2 = new Player("joe");
    var currentPlayer = player2;
    var nextPlayer = switchTurn(player1, player2, currentPlayer);
    expect(nextPlayer).toEqual(player1);
  });
});

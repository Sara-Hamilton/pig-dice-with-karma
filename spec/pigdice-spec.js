// var Player = require('./../js/player.js').playerModule;
import { Player } from './../src/player.js';
import { switchTurn } from './../src/player.js';
import { roll } from './../src/player.js';
import { updateScores } from './../src/player.js';
import { animateDice } from './../src/player.js';

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

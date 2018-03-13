// var Player = require('./../js/player.js').playerModule;
import { Player } from './../src/player.js';
import { switchTurn } from './../src/player.js';
import { roll } from './../src/player.js';
import { updateScores } from './../src/player.js';
import { animateDice } from './../src/player.js';

describe('Player', function() {

  it('roll generates a number less than 7', function() {
    var number = roll();
    expect(number).toBeLessThan(7);
    expect(number).toBeGreaterThan(0);
    expect(number).not.toBeNull();
  });
});

const tennisGameScore = require('./tennis-game-score');

class TennisGame1 {
    constructor() {
        this.scorePlayerOne = 0;
        this.scorePlayerTwo = 0;
    }

    wonPoint(playerName) {
        if (playerName === "player1") {
            this.scorePlayerOne++;
        } else {
            this.scorePlayerTwo++;
        }
    }

    getScore() {
        return tennisGameScore(this.scorePlayerOne, this.scorePlayerTwo);
    }
}

module.exports = TennisGame1;
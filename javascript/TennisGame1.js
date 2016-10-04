var TennisGame1 = function () {
    this.scorePlayerOne = 0;
    this.scorePlayerTwo = 0;
};


TennisGame1.prototype.wonPoint = function (playerName) {
    if (playerName === "player1") {
        this.scorePlayerOne++;
    } else {
        this.scorePlayerTwo++;
    }
};


function getDrawScore(score) {
    const DRAW_SCORE = {
        0: "Love-All",
        1: "Fifteen-All",
        2: "Thirty-All",
        deuce: "Deuce"
    };
    return DRAW_SCORE[score] || DRAW_SCORE.deuce;
}


function getAdvantageGameScore(scorePlayerOne, scorePlayerTwo) {
    const minusResult = scorePlayerOne - scorePlayerTwo;
    if (minusResult === 1)
        return "Advantage player1";
    else if (minusResult === -1)
        return "Advantage player2";
    else if (minusResult >= 2)
        return "Win for player1";
    else
        return "Win for player2";

}

function getSinglePlayerStandardScore(tempScore) {
    const SINGLE_PLAYER_SCORE = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty"
    };
    return SINGLE_PLAYER_SCORE[tempScore];
}

function getStandardScore(scorePlayerOne, scorePlayerTwo) {
    const playerOneScoreDescription = getSinglePlayerStandardScore(scorePlayerOne);
    const playerTwoScoreDescription = getSinglePlayerStandardScore(scorePlayerTwo);
    return `${playerOneScoreDescription}-${playerTwoScoreDescription}`;
}

TennisGame1.prototype.getScore = function () {
    const isDrawScore = this.scorePlayerOne === this.scorePlayerTwo;
    const isAdvantageGame = this.scorePlayerOne >= 4 || this.scorePlayerTwo >= 4;

    if (isDrawScore) {
        return getDrawScore(this.scorePlayerOne);
    } else if (isAdvantageGame) {
        return getAdvantageGameScore(this.scorePlayerOne, this.scorePlayerTwo)
    } else {
        return getStandardScore(this.scorePlayerOne, this.scorePlayerTwo);
    }
};

module.exports = TennisGame1;
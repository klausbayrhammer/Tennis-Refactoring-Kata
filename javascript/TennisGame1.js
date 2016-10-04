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
        2: "Thirty-All"
    };
    return DRAW_SCORE[score] || "Deuce";
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

const gameStateMachine = [
    {
        isGameInState: (scorePlayerOne, scorePlayerTwo) => scorePlayerOne === scorePlayerTwo,
        getScore: getDrawScore
    }, {
        isGameInState: (scorePlayerOne, scorePlayerTwo) => scorePlayerOne >= 4 || scorePlayerTwo >= 4,
        getScore: getAdvantageGameScore
    }, {
        isGameInState: () => true,
        getScore: getStandardScore
    }
];

TennisGame1.prototype.getScore = function () {
    return gameStateMachine.find(state => state.isGameInState(this.scorePlayerOne, this.scorePlayerTwo))
        .getScore(this.scorePlayerOne, this.scorePlayerTwo);
};

module.exports = TennisGame1;
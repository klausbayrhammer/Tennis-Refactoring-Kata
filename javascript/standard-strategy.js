module.exports = {
    isGameInState: () => true,
    getScore: function (scorePlayerOne, scorePlayerTwo) {
        const playerOneScoreDescription = getSinglePlayerStandardScore(scorePlayerOne);
        const playerTwoScoreDescription = getSinglePlayerStandardScore(scorePlayerTwo);
        return `${playerOneScoreDescription}-${playerTwoScoreDescription}`;
    }
};

function getSinglePlayerStandardScore(tempScore) {
    const SINGLE_PLAYER_SCORE = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty"
    };
    return SINGLE_PLAYER_SCORE[tempScore];
}
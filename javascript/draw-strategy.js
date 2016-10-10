function isGameInState(scorePlayerOne, scorePlayerTwo) {
    return scorePlayerOne === scorePlayerTwo;
}

function getScore(score) {
    const DRAW_SCORE = {
        0: "Love-All",
        1: "Fifteen-All",
        2: "Thirty-All"
    };
    return DRAW_SCORE[score] || "Deuce";
}

module.exports = {
    isGameInState, getScore
};

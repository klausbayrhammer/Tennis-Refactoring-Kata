function isGameInState(scorePlayerOne, scorePlayerTwo) {
    return scorePlayerOne >= 4 || scorePlayerTwo >= 4
}

function getScore(scorePlayerOne, scorePlayerTwo) {
    const scoreDiff = scorePlayerOne - scorePlayerTwo;
    if (scoreDiff === 1)
        return "Advantage player1";
    else if (scoreDiff === -1)
        return "Advantage player2";
    else if (scoreDiff >= 2)
        return "Win for player1";
    else
        return "Win for player2";

}

module.exports = {isGameInState, getScore};

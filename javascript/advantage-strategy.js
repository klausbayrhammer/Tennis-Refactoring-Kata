module.exports = {
    isGameInState: (scorePlayerOne, scorePlayerTwo) => scorePlayerOne >= 4 || scorePlayerTwo >= 4,
    getScore: function (scorePlayerOne, scorePlayerTwo) {
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
};

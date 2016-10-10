module.exports = {
    isGameInState: (scorePlayerOne, scorePlayerTwo) => scorePlayerOne === scorePlayerTwo,
    getScore: function (score) {
        const DRAW_SCORE = {
            0: "Love-All",
            1: "Fifteen-All",
            2: "Thirty-All"
        };
        return DRAW_SCORE[score] || "Deuce";
    }
};

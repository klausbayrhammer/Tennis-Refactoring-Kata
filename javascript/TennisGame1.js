var TennisGame1 = function() {
    this.scorePlayerOne = 0;
    this.scorePlayerTwo = 0;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.scorePlayerOne++;
    else
        this.scorePlayerTwo++;
};

TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;
    if (this.scorePlayerOne === this.scorePlayerTwo) {
        switch (this.scorePlayerOne) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    } else if (this.scorePlayerOne >= 4 || this.scorePlayerTwo >= 4) {
        var minusResult = this.scorePlayerOne - this.scorePlayerTwo;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.scorePlayerOne;
            else {
                score += "-";
                tempScore = this.scorePlayerTwo;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
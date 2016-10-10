const drawStrategy = require('./draw-strategy');
const advantageStrategy = require('./advantage-strategy');
const standardStrategy = require('./standard-strategy');

const gameStateMachine = [
    drawStrategy, advantageStrategy, standardStrategy
];

module.exports = function(scorePlayerOne, scorePlayerTwo) {
    return gameStateMachine.find(state => state.isGameInState(scorePlayerOne, scorePlayerTwo))
        .getScore(scorePlayerOne, scorePlayerTwo);

}
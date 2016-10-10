const drawStrategy = require('./draw-strategy');
const advantageStrategy = require('./advantage-strategy');
const standardStrategy = require('./standard-strategy');

const scoringStrategies = [drawStrategy, advantageStrategy, standardStrategy];

module.exports = function(scorePlayerOne, scorePlayerTwo) {
    const applicableStrategy = scoringStrategies.find(strategy => strategy.isGameInState(scorePlayerOne, scorePlayerTwo));
    return applicableStrategy.getScore(scorePlayerOne, scorePlayerTwo);
};
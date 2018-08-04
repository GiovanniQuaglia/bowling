const pins = document.getElementById('number')
const score = document.getElementById('score')
const ball = document.getElementById('ball')

const state = {
  scoresCollection: [],
  total: 0
}

const rollTheBall = () => {
  let rangeOfPins = 11
  let hitPins = Math.floor(Math.random() * rangeOfPins)
  let lastScore = state.scoresCollection[state.scoresCollection.length - 1]
  let remainingPins = rangeOfPins - lastScore
  let hitRemainingPins = Math.floor(Math.random() * remainingPins)
  const framesLimit = 20
  if (state.scoresCollection.length < framesLimit) {
    checkFrame(hitPins, hitRemainingPins)
  }
  else displayFinalScore(score, state.total)
}

const checkFrame = (hitPins, hitRemainingPins) => {
  if (state.scoresCollection.length % 2 === 0) {
    pushScoreToState(state.scoresCollection, hitPins)
    updateDisplayedHitPins(pins, hitPins)
  }
  else if (state.scoresCollection.length % 2 !== 0) {
    pushScoreToState(state.scoresCollection, hitRemainingPins)
    updateDisplayedHitPins(pins, hitRemainingPins)
    updateScore(score, state.scoresCollection)
  }
}

const updateDisplayedHitPins = function (target, pinsToBeDisplayed) {
  target.innerHTML = pinsToBeDisplayed
};

const pushScoreToState = function (target, pinsToBePushed) {
  target.push(pinsToBePushed)
}

function updateScore (target, scoresCollection) {
  state.total = scoresCollection.reduce((score, value, i, arr) => {
    let strike = value === 10
    let spare = value + arr[i + 1] === 10
    if (i % 2 === 0) {
      if (i > 17 && spare || strike) {
        return score + 10
      }
      if (strike) {
        return score + (value + arr[i + 2] + arr[i + 3])
      }
      if (spare) {
        return score + (value + arr[i + 1] + arr[i + 2])
      }
      return score + (value + arr[i + 1])
    }
    return score
  }, 0)
  target.innerHTML = isNaN(state.total) ? "Well done, roll again!" : `Score: ${state.total}`
}

const displayFinalScore = (target, totalScore) => {
  if (totalScore < 70) {
    target.innerHTML = `Your final score is ${totalScore}. Well, at least you tried...`
  }
  if (totalScore >= 70 && totalScore <= 99) {
    target.innerHTML = `Your final score is ${totalScore}, bravo!`
  }
  if (totalScore > 99) {
    target.innerHTML = `You are very talented, your final score is ${totalScore}!`
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ball.addEventListener('click', rollTheBall)
});

module.exports = {updateDisplayedHitPins, displayFinalScore, pushScoreToState, updateScore};
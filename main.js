const pins = document.getElementById('number')
const score = document.getElementById('score')
const ball = document.getElementById('ball')

const state = {
  scoresCollection: [],
  total: 0
}

const onBallRoll = () => {
  let rangeOfPins = 11
  let hitPins = Math.floor(Math.random() * rangeOfPins)
  let lastScore = state.scoresCollection[state.scoresCollection.length - 1]
  let remainingPins = rangeOfPins - lastScore
  let hitRemainingPins = Math.floor(Math.random() * remainingPins)
  const framesLimit = 20
  if (state.scoresCollection.length < framesLimit) {
    checkFrame(hitPins, hitRemainingPins)
  }
  else displayFinalScore()
}

const checkFrame = (hitPins, hitRemainingPins) => {
  if (state.scoresCollection.length % 2 === 0) {
    pushScoreToState(hitPins)
    updateDisplayedHitPins(document.getElementById('number'), hitPins)
  }
  else if (state.scoresCollection.length % 2 !== 0) {
    pushScoreToState(hitRemainingPins)
    updateDisplayedHitPins(document.getElementById('number'), hitRemainingPins)
    updateScore()
  }
}

const updateDisplayedHitPins = function (target, pinsToBeDisplayed) {
  target.innerHTML = pinsToBeDisplayed
};

const pushScoreToState = function (pinsToBePushed) {
  state.scoresCollection.push(pinsToBePushed)
}

function updateScore () {
  state.total = state.scoresCollection.reduce((score, value, i, arr) => {
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
  score.innerHTML = isNaN(state.total) ? "Well done, roll again!" : `Score: ${state.total}`
}

const displayFinalScore = () => {
  if (state.total < 70) {
  score.innerHTML = `Your final score is ${state.total}. Well, at least you tried...`
  }
  if (state.total >= 70 && state.total <= 99) {
    score.innerHTML = `Your final score is ${state.total}, bravo!`
  }
  if (state.total > 99) {
    score.innerHTML = `You are very talented, your final score is ${state.total}!`
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ball.addEventListener('click', onBallRoll)
});

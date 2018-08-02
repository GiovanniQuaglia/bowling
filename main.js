const pins = document.getElementById('number')
const score = document.getElementById('score')
const ball = document.getElementById('ball')
let scoresCollection = []
let total = 0

ball.addEventListener('click', function () {
  let hitPins = Math.floor(Math.random() * 11)
  if (scoresCollection.length < 20) {
    if (scoresCollection.length % 2 === 0) {
      pins.innerHTML = hitPins
      scoresCollection.push(hitPins)
    }
    else if (scoresCollection.length % 2 !== 0) {
      let lastScore = scoresCollection[scoresCollection.length - 1]
      let remainingPins = 11 - lastScore
      let hitRemainingPins = Math.floor(Math.random() * remainingPins)
      scoresCollection.push(hitRemainingPins)
      pins.innerHTML = hitRemainingPins
      updateScore()
    }
  }
  else endGame()
})

function updateScore () {
  total = scoresCollection.reduce((score, value, i, arr) => {
    if (i % 2 === 0) {
      if (i > 17 && value + arr[i + 1] === 10 || value === 10) {return score + 10}
      if (value === 10) { return score + (value + arr[i + 2] + arr[i + 3]) }
      if (value + arr[i + 1] === 10) { return score + (value + arr[i + 1] + arr[i + 2]) }
      return score + (value + arr[i + 1])
    }
    return score
  }, 0)
  !isNaN(total) ? score.innerHTML = `Score: ${total}` : score.innerHTML = "Well done, roll again!"
}

function endGame() {
  if (total < 70) {
  score.innerHTML = `Your final score is ${total}. Well, at least you tried...`
  }
  if (total >= 70 && total <= 99) {
    score.innerHTML = `Your final score is ${total}, bravo!`
  }
  if (total > 99) {
    score.innerHTML = `You are so talented, your final score is ${total}!!`
  }
}

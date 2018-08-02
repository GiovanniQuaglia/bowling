const pins = document.getElementById('number')
const score = document.getElementById('score')
const ball = document.getElementById('ball')
let scoresCollection = []

ball.addEventListener('click', function () {
  let hitPins = Math.floor(Math.random() * 11)
  if (scoresCollection.length < 20) {
    if (scoresCollection.length % 2 === 0) {
      scoresCollection.push(hitPins)
    }
    else if (scoresCollection.length % 2 !== 0) {
      let lastScore = scoresCollection[scoresCollection.length - 1]
      let remainingPins = 11 - lastScore
      scoresCollection.push(Math.floor(Math.random() * remainingPins))
      updateScore()
    }
  }
})

function updateScore () {
  let total = scoresCollection.reduce((score, value, i, arr) => {
    if (i % 2 === 0) {
      if (value === 10) { return score + (value + arr[i + 2] + arr[i + 3]) }
      if (value + arr[i + 1] === 10) { return score + (value + arr[i + 1] + arr[i + 2]) }
      return score + (value + arr[i + 1])
    }
    return score
  }, 0)
  console.log(total)
}

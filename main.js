const pins = document.getElementById('number')
const score = document.getElementById('score')
const ball = document.getElementById('ball')

let scoresCollection = []

ball.addEventListener('click', function () {
  let hitPins = Math.floor(Math.random() * 11)
  if (scoresCollection.length < 20) {
    if (scoresCollection.length % 2 === 0) {
      scoresCollection.push(hitPins)
      console.log('score', scoresCollection)
    }
    else if (scoresCollection.length % 2 !== 0) {
      let lastScore = scoresCollection[scoresCollection.length - 1]
      let remainingPins = 11 - lastScore
      scoresCollection.push(Math.floor(Math.random() * remainingPins))
      console.log('score', scoresCollection)
    }
  }
})


var readlineSync = require('readline-sync')

var scores = 0


var questionBank = [
  {
    question: 'Real name of Iron man?',
    answer: 'Anthony Edward Stark',
  },
  {
    question:'Was he  his parents real son?',
      answer: 'No Adopted',
  },
  {
    question:'Name of parents ?',
    answer:'Howard and Maria' ,
  },
  {
    question:
     ' Why did they adopt him?',
    answer: 'cause there real son Arno died',
  },
  {
    question:
      'Where did Anthony stark studied?',
    answer: 'MIT',
  },
]

function welcome() {
  var userName = readlineSync.question('What is your name? ')
  console.log('Welcome ' + userName + ' to do you know Iron Man?')
}

function askQuestion(question, answer) {
  var resAnswer = readlineSync.question(question)
  if (resAnswer.toLowerCase() === answer.toLowerCase()) {
    scores = scores + 1
    console.log('Correctly answered | Current Score: ' + scores)
  } else {
    console.log(' Wrong Answer! | Current Score: ' + scores)
  }
  console.log('--------------')
}

function play() {
  for (var i = 0; i < questionBank.length; i++) {
    var currentQuestion = questionBank[i]
    askQuestion(currentQuestion.question, currentQuestion.answer)
  }
}

var highestScore = {
  name: 'ALI',
  score: 5,
}

function outro() {
  console.log('Your Final SCORE: ', scores)
  console.log(
    ' Highest Score Till Date: ' +
      highestScore.score +
      ' by ' +
      highestScore.name
  )
  if (scores > highestScore.score) {
    console.log(
      'Congratulations!!! You have made new record by scoring ' + scores
    )
    
  }
}

welcome()
play()
outro()

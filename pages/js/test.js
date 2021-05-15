const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } 
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: '12. в якому році створили minecraft?',
    answers: [
      { text: '2009', correct: true },
      { text: '2008', correct: false },
      { text: '2012', correct: false },
      { text: '2005', correct: false }
    ]
  },
  {
    question: '11. в якому році створили Electronic Arts?',
    answers: [
      { text: '1992', correct: false },
      { text: '2000', correct: false },
      { text: '1982', correct: true },
      { text: '1990', correct: false }
    ]
  },
  {
    question: '10. в якому році створили Ubisoft?',
    answers: [
      { text: '1996', correct: false },
      { text: '1986', correct: true },
      { text: '2001', correct: false },
      { text: '1994', correct: false }
    ]
  },
  {
    question: '9. в якому році створили Need for Speed 1?',
    answers: [
      { text: '2000', correct: false },
      { text: '1999', correct: false },
      { text: '1989', correct: false },
      { text: '1994', correct: true }
    ]
  },
    {
      question: '8. в якому році створили Hitman 3?',
      answers: [
        { text: '2020', correct: true },
        { text: '2015', correct: false },
        { text: '2018', correct: false },
        { text: '2013', correct: false }
        
      ]
    },
    {
      question: '7. в якому році створили Among Us?',
      answers: [
        { text: '2020', correct: false },
        { text: '2018', correct: true },
        { text: '2021', correct: false },
        { text: '2015', correct: false }
      ]
    },
    {
      question: '6. в якому році створили Assassin’s Creed?',
      answers: [
        { text: '1998', correct: false },
        { text: '2020', correct: false },
        { text: '2007', correct: true },
        { text: '2006', correct: false }
      ]
    },
    {
      question: '5. в якому році створили S.T.A.L.K.E.R.?',
      answers: [
        { text: '1993', correct: false },
        { text: '1699', correct: false },
        { text: '2001', correct: false },
        { text: '2007', correct: true }
      ]
    },
    {
      question: '4. Коли був створений Steam',
      answers: [
        { text: '2001', correct: false },
        { text: '2000', correct: false },
        { text: '1998', correct: false },
        { text: '2003', correct: true }
      ]
    },
    {
      question: '3. в якому році створили Just Cause 3?',
      answers: [
        { text: '2014', correct: true },
        { text: '2000', correct: false },
        { text: '2009', correct: false },
        { text: '1993', correct: false }
      ]
    },
    {
      question: '2. в якому році створили Just Cause 2?',
      answers: [
        { text: '2007', correct: false },
        { text: '2005', correct: false },
        { text: '2010', correct: true },
        { text: '2012', correct: false }
      ]
    },
    {
      question: '1. в якому році створили Just Cause 4?',
      answers: [
        { text: '2015', correct: false },
        { text: '2016', correct: false },
        { text: '2017', correct: false },
        { text: '2018', correct: true }
      ]
    }
  ]
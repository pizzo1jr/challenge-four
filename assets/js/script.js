const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const htmlTimeLeft = document.getElementById('timeLeft')
// var timeLeft = 80;

let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// htmlTimeLeft.textContent = timeLeft;

// viewHighScoresBtnEl.addEventListener("click", function() { // View high scores

//     var quizUsers = "";
//     var substringTest ="";
//     var highScores = "";

//     for (var i=0; i < localStorage.length; i++) {
//         var checkUserValue = [];
        
//         quizUsers = localStorage.getItem(localStorage.key(i));
//         substringTest = quizUsers.substring(0,4) 
//         if (substringTest == "quiz") {
//             checkUserValue = quizUsers.split(",");
//             var userName = checkUserValue[0]
//             highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
//        }
//     }
//     window.alert(highScores);

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
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
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
    const selctedButton= e.target
    const correct = selctedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
       nextButton.classList.remove('hide') 
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
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
        question: 'What is 2+2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'Which death helped to start WW1',
        answers: [
            { text: 'Kaiser Wilhelm', correct: false},
            { text: 'Archbishop Ussher', correct: false},
            { text: 'Queen Victoria', correct: false},
            { text: 'Archduke Franz Ferdinand', correct: true}
        ]
    },
    {
        question: 'How many republics made up the former Soviet Union',
        answers: [
            { text: '15', correct: true},
            { text: '12', correct: false},
            { text: '20', correct: false},
            { text: '10', correct: false},
        ]
    },
    {
        question: 'Through which national park does the Continential Divide not pass?',
        answers: [
            { text: 'Yellowstone', correct: false},
            { text: 'Rocky Mountain', correct: false},
            { text: 'Glacier', correct: false},
            { text: 'Yosimite', correct: true},
        ]
    },
    {
        question: 'Who is the first US president to be on television?',
        answers: [
            { text: 'Richard Nixon', correct: false},
            { text: 'Ronald Reagan', correct: false},
            { text: 'Abraham Lincoln', correct: false},
            { text: 'Franklin Delano Roosevelt', correct: true},
        ]
    }
]
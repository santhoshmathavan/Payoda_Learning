const startButton = document.getElementById('startbtn')
const nextButton = document.getElementById('nextbtn')
const quesContainerElement = document.getElementById('questions-container')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-btn')

let shuffleQuestions,currentQuestionIndex

startButton.addEventListener('click',StartGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    SetNextQuestion()
})

function StartGame(){
    console.log("Button OK")
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(()=>Math.random() - 0.5)
    currentQuestionIndex=0
    quesContainerElement.classList.remove('hide')
    SetNextQuestion()
}

function SetNextQuestion(){
    ResetState()
    ShowQuestions(shuffleQuestions[currentQuestionIndex])
}

function ShowQuestions(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',SelectAnswer)
        answerElement.appendChild(button)  
    })
}

function SelectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    SetStatusClass(document.body,correct)
    Array.from(answerElement.children).forEach(button =>{
        SetStatusClass(button,button.dataset.correct)
    })
    if(shuffleQuestions.length > currentQuestionIndex+1){
        nextButton.classList.remove('hide')
    }
    else{
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
    }
}

function SetStatusClass(element,correct){
    ClearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function ClearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function ResetState(){
    ClearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}

const questions=[
    {
        question:"2+2",
        answers:[
            {text:'4',correct:true},
            {text:'22',correct:false}
        ]
    },
    {
        question:"Captial of India",
        answers:[
            {text:'Delhi',correct:true},
            {text:'Chennai',correct:false}
        ]
    },
    {
        question:"Captial of TamilNadu",
        answers:[
            {text:'Delhi',correct:false},
            {text:'Chennai',correct:true}
        ]
    }
]
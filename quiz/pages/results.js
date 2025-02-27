const usernameP = document.getElementById('username')
const rightWrong = document.getElementById('right-wrong')
const answersForm = document.getElementById('answers')
const restartBtn = document.getElementById('restart')

let questionsStr = localStorage.getItem('questions')
let userAnswersStr = localStorage.getItem('userAnswers')
const score = localStorage.getItem('score')
const username = localStorage.getItem('username')


usernameP.textContent = username
rightWrong.textContent = `${score} вы решили верно и ${5 - score} неверно`

    const questionsArr = JSON.parse(questionsStr)
    const userAnswersArr = JSON.parse(userAnswersStr)
    const answersHTML = questionsArr.map((question, index) => 
        `
        <div class="answer">
                <p><b>Вопрос ${index + 1}</b></p>
                <p>${question.question}</p>
                <p><img src="${question.image}" width="400px" height="400px"></p>

                <div class="choice">
                    ${question.options.map(option => `
                    <div class="options" id="question-form">
                    <label for="opt0" id="lb0">
                    <input type="radio" name="options" value="${option}" id="opt"> ${option}
                    </label>
                    </div>
                    `).join('')}
                    </div>
    
            <p>${question.explanation}</p>
        </div> 
        `).join('');

    answersForm.innerHTML = answersHTML


    restartBtn.addEventListener('click', () => {
        document.location = '../index.html'
    })
    
const questions = [
    {
        question: "Кто изображен на фото?",
        options: ["Илон Маск", "Палмер Лаки", "Виктор Франкл", "Энштейн"],
        correctAnswer: "Палмер Лаки",
        explanation: "Это Палмер Лаки, основатель компании Oculus и главный инженер компании.",
        image: "../images/palmer.jpg"
    },

    {
        question: "Какая компания это устройство?",
        options: ["Valve", "HTC", "Samsung", "Oculus"],
        correctAnswer: "HTC",
        explanation: "Шлем производства HTC",
        image: "../images/vive.png"
    },

    {
        question: "Логотип какого игрового движка изображен на фото?",
        options: ["Unreal Engine", "Godot", "Unity", "Cry Engine"],
        correctAnswer: "Unity",
        explanation: "Это Unity, популярный игровой движок, используется, в том числе и для создания игр виртуальной реальности.",
        image: "../images/unity.png"
    },

    {
        question: "Почему Палмера Лаки (создателя шлема Oculus) уволили из компании?",
        options: ["Он сам ушел, потому что решил основать другой стартап", "Его обвинили в жестоком обращении с сотрудниками", "Компания, купившая Oculus решила от него избавиться", "За политические взгляды"],
        correctAnswer: "За политические взгляды",
        explanation: "Его уволили в 2017 году за политические взгляды",
        image: "../images/uvolnenie.jpg"
    },

    {
        question: "За сколько было продана компания Oculus?",
        options: ["1 миллиард долларов", "2 миллиарда долларов", "2.5 миллиарда долларов", "Компанию никто не продавал",],
        correctAnswer: "2 миллиарда долларов",
        explanation: "Компания было продана за 2 миллиарда долларов",
        image: "../images/dollar.png"
    },
]



const submitAnswerBtn = document.getElementById('submit-answer')
const resultsBtn = document.getElementById('view-results')
const questionForm = document.getElementById('question-form')
const choicesForm = document.getElementById('choices-form')

let score = 0
let userAnswers = []
let currentIndex = 0


function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5)
}

shuffleArray(questions)



function showQuestion() {
    const question = questions[currentIndex]
    const questionHTML =
        `
        <div class="question">
                <h1>Вопрос ${currentIndex + 1}.</h1>
                <p><img src="${question.image}" width="400px" height="400px"></p>
                <p>${question.question}</p>
            </div>
    `
    
    shuffleArray(question.options)
    const choicesHTML = `
                    ${question.options.map(option => `
                <div class="options" id="question-form">
                    <label for="opt0" id="lb0">
                         <input type="radio" name="options" value="${option}" id="opt"> ${option}
                    </label>
                </div>
                `).join('')}
    `
    questionForm.innerHTML = questionHTML
    choicesForm.innerHTML = choicesHTML
}

showQuestion()


choicesForm.addEventListener('change', () => {
    submitAnswerBtn.disabled = !document.querySelector('input[name=options]:checked')
})

submitAnswerBtn.addEventListener('click', ()=> {
    userAnswers.push(document.querySelector('input[name=options]:checked'))

    if (currentIndex == questions.length - 1) {
        resultsBtn.classList.remove('hidden')
        userAnswers.forEach((answer, index) => {
            console.log(answer.value, questions[index].correctAnswer);
            if (answer.value === questions[index].correctAnswer) {
                score++;
            }
        });
        localStorage.setItem('score', score)
    } else {
        currentIndex++;
        showQuestion();
        submitAnswerBtn.disabled = true;
    }
})

resultsBtn.addEventListener('click', () => {
    document.location = 'results.html';
    localStorage.setItem('questions', JSON.stringify(questions));
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers))
})


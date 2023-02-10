const quizData = [
    {
        question: "¿Cuál es el objetivo principal del proyecto Sistema de Transporte Provincial IRDRUTA?",
        a: "Brindar un servicio de transporte más barato",
        b: "Aumentar la cantidad de viajeros en la ciudad",
        c: "Ofrecer un servicio de transporte más seguro",
        d: "Brindar un servicio de transporte más eficiente",
        correct: "d",
    },
    {
        question: "¿Qué tipo de dispositivos es compatible la aplicación?",
        a: "Calculadoras",
        b: "Dispotivos móviles y de escritorio",
        c: "Videoconsolas",
        d: "Celulares de baja gama",
        correct: "b",
    },
    {
        question: "¿Cómo trabaja el proyecto con los proveedores de servicios de transporte?",
        a: "Independientemente",
        b: "En competencia",
        c: "En colaboración estrecha",
        d: "Con desconfianza",
        correct: "c",
    },
    {
        question: "¿Qué tipo de retroalimentación está disponible para los usuarios?",
        a: "Comentarios negativos",
        b: "Comentarios y sugerencias",
        c: "Comentarios irrelevantes",
        d: "Ninguna de las anteriores",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Respondiste ${score}/${quizData.length} preguntas correctamente</h2>
                <button onclick="location.reload()">Inténtalo nuevamente</button>
            `
        }
    }
})
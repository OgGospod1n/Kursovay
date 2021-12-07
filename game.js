const quizData = [
    {
        question: "Самая длинная река в мире?",
        a: "Амазонка",
        b: "Амур",
        c: "Нил",
        correct: "a",
    },
    {
        question: "Эта река с притоками служит границей между Россией и Китаем",
        a: "Хуанхе",
        b: "Амур",
        c: "Сырдарья",
        correct: "b",
    },
    {
        question: "2-я по протяжённости река в Европе",
        a: "Волга",
        b: "Днепр",
        c: "Дунай",
        correct: "c",
    },
    {
        question: "До 2008 г. эта река считалась самой длинной, опережая Амазонку",
        a: "Конго",
        b: "Нил",
        c: "Миссисипи",
        correct: "b",
    },
    {
        question: "Крупнейшая река Северной Америки",
        a: "Миссисипи",
        b: "Ниагара",
        c: "Арканзас",
        correct: "a",
    },
    {
        question: "Вместе с притоками протекает по РФ, Казахстану и КНР",
        a: "Амур",
        b: "Лена",
        c: "Объ",
        correct: "c",
    },
    {
        question: "Крупнейшая река Азии",
        a: "Енисей",
        b: "Янцзы",
        c: "Амур",
        correct: "b",
    },
    {
        question: "Самая широкая река России (60 км)",
        a: "Волга",
        b: "Енисей",
        c: "Объ",
        correct: "c",
    },
    {
        question: "Самая быстрая река на Земле (4-5 м/с)",
        a: "Амазонка",
        b: "Янцзы",
        c: "Миссисипи",
        correct: "a",
    },
    {
        question: "Самая глубокая река на Земле (250 м)",
        a: "Нил",
        b: "Амазонка",
        c: "Конго",
        correct: "c",
    },
    {
        question: "Самая международная река Европы (протекает по максимальному кол-ву стран)",
        a: "Рейн",
        b: "Дунай",
        c: "Днепр",
        correct: "b",
    },
    {
        question: "Самая высокая река на Земле (исток 5,6 км)",
        a: "Инд",
        b: "Колорадо",
        c: "Янцзы",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы правильно ответили на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Перезапуск</button>
            `;
        }
    }
});

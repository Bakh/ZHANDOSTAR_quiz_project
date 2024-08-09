const quizData = [
    {
        question: "ЖАНДОСТАР арасында жұппен ән орындау бойынша үздік топтың мүшесі, әрі аққұба келген жігіттің есімі кім?",
        a: "Нұрсейіт",
        b: "Мергенбай",
        c: "Ролан",
        d: "Сәулет",
        e: "Бақберген",
        correct: "d"
    },
    {
        question: "ЖАНДОСТАР арасында өз саласының үздігі кім?",
        a: "Салтанат",
        b: "Ролан",
        c: "Светлана",
        d: "Анар",
        e: "Сәулет",
        correct: "c"
    },
    {
        question: "ЖАНДОСТАР арасындағы жауынгердің есімі кім?",
        a: "Нұрсейіт",
        b: "Мергенбай",
        c: "Светлана",
        d: "Сәулет",
        e: "Сандуғаш",
        correct: "e"
    },
    {
        question: "ЖАНДОСТАР арасында бастық кім?",
        a: "Анар",
        b: "Мергенбай",
        c: "Динара",
        d: "Сәулет",
        e: "Сандуғаш",
        correct: "a"
    },
    {
        question: "ЖАНДОСТАР арасында бильярд ойыны бойынша үздік ойыншының есімі кім?",
        a: "Светлана",
        b: "Нұрсейіт",
        c: "Ролан",
        d: "Динара",
        e: "Мергенбай",
        correct: "a"
    },
    {
        question: "ЖАНДОСТАР арасындағы нағыз батырдың есімі кім?",
        a: "Нұрсейіт",
        b: "Салтанат",
        c: "Сандуғаш",
        d: "Ролан",
        e: "Анар",
        correct: "b"
    },
    {
        question: "Ролан мен Бақберген күрессе, кім жеңеді?",
        a: "Ролан",
        b: "Салтанат",
        c: "Достық",
        d: "Бақберген",
        e: "Динара",
        correct: "d"
    },
    {
        question: "ЖАНДОСТАР арасында бильярд ойыны бойынша үздік жаттықтырушының есімі кім?",
        a: "Светлана",
        b: "Нұрсейіт",
        c: "Ролан",
        d: "Динара",
        e: "Мергенбай",
        correct: "d"
    },
    {
        question: "ЖАНДОСТАР арасында екінші бастықтың аты кім?",
        a: "Мергенбай",
        b: "Анар",
        c: "Нұрсейіт",
        d: "Сәулет",
        e: "Светлана",
        correct: "b"
    },
    {
        question: "Роланның қызметі қалай аталады?",
        a: "Әкім",
        b: "Мектеп директоры",
        c: "Оқрана",
        d: "Информатик",
        e: "Деректір",
        correct: "e"
    },
    {
        question: "Келесі сөздердің қайсысы «бүркіт» сөзіне мағыналық жағынан жақын келеді?",
        a: "Мергенбай",
        b: "Қапқарашкі",
        c: "Аққу",
        d: "Мыты",
        e: "Мерген",
        correct: "c"
    },
    {
        question: "Қала және елді мекендер ішінде круиз-контроль арқылы автокөлік жүргізуге бола ма?",
        a: "Болады",
        b: "Қайдам ...",
        c: "Әрине",
        d: "Тыйым салынады",
        e: "Бопты, сенікі дұрыс",
        correct: "c"
    },
    {
        question: "«Мұртты зейнеткер» хикаясында басты рөлді сомдайтын кейіпкердің есімі кім?",
        a: "Фунтик",
        b: "Қошан",
        c: "Нұрсейіт",
        d: "Нұреке",
        e: "Нүрсит",
        correct: "b"
    },
    {
        question: "«Доверена» сөзінің ағылшын тіліндегі тікелей аудармасы қалай жазылады?",
        a: "Low-priced",
        b: "Affordable",
        c: "Low-cost",
        d: "Inexpensive",
        e: "Cheap",
        correct: "e"
    },
    {
        question: "«Сонымен, бастық кім болды өзі?!",
        a: "Анар!",
        b: "Анар!",
        c: "Анар!",
        d: "Анар!",
        e: "Анар!",
        correct: "e"
    },
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quiz.innerHTML = `
        <div class="quiz-question">${currentQuizData.question}</div>
        <label>
            <input type="radio" name="answer" value="a">
            ${currentQuizData.a}
        </label><br>
        <label>
            <input type="radio" name="answer" value="b">
            ${currentQuizData.b}
        </label><br>
        <label>
            <input type="radio" name="answer" value="c">
            ${currentQuizData.c}
        </label><br>
        <label>
            <input type="radio" name="answer" value="d">
            ${currentQuizData.d}
        </label><br>
        <label>
            <input type="radio" name="answer" value="e">
            ${currentQuizData.e}
        </label>
    `;
}

submitBtn.addEventListener('click', () => {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (answer) {
        if (answer.value === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            results.innerHTML = `Сіз ${quizData.length} сұрақтың ${score}-іне дұрыс жауап бердіңіз!`;
            quiz.innerHTML = ''; // Викторинаны аяқтау
            submitBtn.style.display = 'none'; // Жауап беру батырмасын жасыру
        }
    }
});

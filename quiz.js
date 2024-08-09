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
        question: "ЖАНДОСТАР арасында үстел теннисінен үздің ойыншының есімі кім?",
        a: "Светлана",
        b: "Нұрсейіт",
        c: "Ролан",
        d: "Динара",
        e: "Мергенбай",
        correct: "d"
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
        question: "ЖАНДОСТАР арасында екінші бастықтың аты кім?",
        a: "Мергенбай",
        b: "Анар",
        c: "Нұрсейіт",
        d: "Сәулет",
        e: "Светлана",
        correct: "b"
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

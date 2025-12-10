// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let selectedAnswers = [];
let answered = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const resetStatsBtn = document.getElementById('reset-stats-btn');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressBar = document.getElementById('progress');
const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const correctCount = document.getElementById('correct-count');
const totalCount = document.getElementById('total-count');

// Stats Elements
const totalAttempts = document.getElementById('total-attempts');
const avgScore = document.getElementById('avg-score');
const bestScore = document.getElementById('best-score');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    totalQuestionsSpan.textContent = quizQuestions.length;
    totalCount.textContent = quizQuestions.length;
});

// Event Listeners
startBtn.addEventListener('click', startQuiz);
resetStatsBtn.addEventListener('click', resetStats);
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startQuiz);
homeBtn.addEventListener('click', goHome);

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Start Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    // Shuffle questions and their answers
    shuffledQuestions = shuffleArray(quizQuestions).map(q => {
        // Create answer objects with original indices
        const answerObjects = q.answers.map((answer, index) => ({
            text: answer,
            isCorrect: q.correct.includes(index)
        }));

        // Shuffle the answers
        const shuffledAnswers = shuffleArray(answerObjects);

        return {
            question: q.question,
            answers: shuffledAnswers
        };
    });

    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    showQuestion();
}

// Show Question
function showQuestion() {
    answered = false;
    selectedAnswers = [];
    submitBtn.disabled = true;
    submitBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');

    const question = shuffledQuestions[currentQuestionIndex];
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    // Update progress bar
    const progress = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Clear and populate answers
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.dataset.index = index;
        answerDiv.innerHTML = `
            <div class="checkbox"></div>
            <span class="answer-text">${answer.text}</span>
        `;
        answerDiv.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(answerDiv);
    });
}

// Select Answer
function selectAnswer(index) {
    if (answered) return;

    const answerDiv = document.querySelector(`.answer-option[data-index="${index}"]`);

    if (selectedAnswers.includes(index)) {
        selectedAnswers = selectedAnswers.filter(i => i !== index);
        answerDiv.classList.remove('selected');
    } else {
        selectedAnswers.push(index);
        answerDiv.classList.add('selected');
    }

    submitBtn.disabled = selectedAnswers.length === 0;
}

// Check Answer
function checkAnswer() {
    answered = true;
    const question = shuffledQuestions[currentQuestionIndex];

    // Find correct answer indices
    const correctIndices = question.answers
        .map((answer, index) => answer.isCorrect ? index : -1)
        .filter(index => index !== -1);

    // Check if answer is completely correct
    const isCorrect =
        selectedAnswers.length === correctIndices.length &&
        selectedAnswers.every(i => correctIndices.includes(i));

    if (isCorrect) {
        score++;
    }

    // Show correct/incorrect for each answer
    document.querySelectorAll('.answer-option').forEach((div, index) => {
        const isThisCorrect = correctIndices.includes(index);
        const wasSelected = selectedAnswers.includes(index);

        if (wasSelected && isThisCorrect) {
            div.classList.add('correct');
        } else if (wasSelected && !isThisCorrect) {
            div.classList.add('incorrect');
        } else if (!wasSelected && isThisCorrect) {
            div.classList.add('missed');
        }

        div.classList.remove('selected');
    });

    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');

    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    finalScore.textContent = `${percentage}%`;
    correctCount.textContent = score;

    // Set message based on score
    if (percentage >= 87.6) {
        resultMessage.textContent = "Ausgezeichnet! (Excellent)";
    } else if (percentage >= 75.1) {
        resultMessage.textContent = "Gut! (Good)";
    } else if (percentage >= 62.6) {
        resultMessage.textContent = "Befriedigend (Satisfactory)";
    } else if (percentage >= 50.1) {
        resultMessage.textContent = "Genügend (Sufficient)";
    } else {
        resultMessage.textContent = "Nicht bestanden (Unsatisfactory)";
    }

    // Save stats
    saveStats(percentage);
}

// Go Home
function goHome() {
    resultsScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    loadStats();
}

// Stats Functions
function loadStats() {
    const stats = JSON.parse(localStorage.getItem('csecQuizStats')) || {
        attempts: 0,
        totalScore: 0,
        bestScore: 0
    };

    totalAttempts.textContent = stats.attempts;
    avgScore.textContent = stats.attempts > 0
        ? `${Math.round(stats.totalScore / stats.attempts)}%`
        : '0%';
    bestScore.textContent = `${stats.bestScore}%`;
}

function saveStats(percentage) {
    const stats = JSON.parse(localStorage.getItem('csecQuizStats')) || {
        attempts: 0,
        totalScore: 0,
        bestScore: 0
    };

    stats.attempts++;
    stats.totalScore += percentage;
    if (percentage > stats.bestScore) {
        stats.bestScore = percentage;
    }

    localStorage.setItem('csecQuizStats', JSON.stringify(stats));
    loadStats();
}

function resetStats() {
    if (confirm('Möchtest du wirklich alle Statistiken zurücksetzen?')) {
        localStorage.removeItem('csecQuizStats');
        loadStats();
    }
}

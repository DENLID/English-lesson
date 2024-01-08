const levels = {
    beginner: ["apple", "banana", "cat", "dog", "elephant"],
    intermediate: ["computer", "programming", "language", "developer", "website"],
    advanced: ["encapsulation", "inheritance", "polymorphism", "abstraction", "interface"]
};

const answers_sp = {
    "apple": "яблоко", 
    "banana": "банан", 
    "cat": "кот", 
    "dog": "собака", 
    "elephant": "слон",
    "computer": "компьютер", 
    "programming": "программирование", 
    "language": "язык",
    "developer": "разработчик", 
    "website": "сайт",
    "encapsulation": "инкапсуляция", 
    "inheritance": "наследование", 
    "polymorphism": "полиморфизм", 
    "abstraction": "абстракция", 
    "interface": "интерфейс"
}

let currentLevel = "";
let currentLessonIndex = 0;

function startLesson() {
    const difficultySelect = document.getElementById("difficulty");
    currentLevel = difficultySelect.value;
    currentLessonIndex = 0;

    displayLesson();
}

function displayLesson() {
    const lessonContainer = document.getElementById("lesson-container");
    lessonContainer.style.display = "block";

    const lessonTitle = document.getElementById("lesson-title");
    const question = document.getElementById("question");
    const result = document.getElementById("result");

    lessonTitle.textContent = `Урок ${currentLessonIndex + 1}`;
    question.textContent = `Что такое "${levels[currentLevel][currentLessonIndex]}"?`;
    result.textContent = "";

    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const result = document.getElementById("result");

    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = answers_sp[levels[currentLevel][currentLessonIndex].toLowerCase()];
    console.log(correctAnswer)

    if (userAnswer === correctAnswer) {
        result.textContent = "Правильно! Следующий вопрос.";
        currentLessonIndex++;
        if (currentLessonIndex < levels[currentLevel].length) {
            displayLesson();
        } else {
            result.textContent = "Поздравляю! Вы завершили уроки.";
            document.getElementById("lesson-container").style.display = "none";
        }
    } else {
        result.textContent = "Неправильный ответ. Попробуйте еще раз.";
    }
}

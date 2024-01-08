const levels = {
    beginner: ["apple", "banana", "cat", "dog", "elephant"],
    intermediate: ["computer", "programming", "language", "developer", "website"],
    advanced: ["encapsulation", "inheritance", "polymorphism", "abstraction", "interface"]
};

const answers_sp = {
    "apple": "яблуко", 
    "banana": "банан", 
    "cat": "кіт", 
    "dog": "собака", 
    "elephant": "слон",
    "computer": "комп'ютер", 
    "programming": "програмування", 
    "language": "мова",
    "developer": "розробник", 
    "website": "сайт",
    "encapsulation": "інкапсуляція", 
    "inheritance": "успадкування", 
    "polymorphism": "поліморфізм", 
    "abstraction": "абстракція", 
    "interface": "інтерфейс"
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
    question.textContent = `Що таке "${levels[currentLevel][currentLessonIndex]}"?`;
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
        result.textContent = "Правильно! Наступне питання.";
        currentLessonIndex++;
        if (currentLessonIndex < levels[currentLevel].length) {
            displayLesson();
        } else {
            result.textContent = "Вітаю! Ви закінчили уроки.";
            document.getElementById("lesson-container").style.display = "none";
        }
    } else {
        result.textContent = "Неправильна відповідь. Спробуйте ще раз.";
    }
}

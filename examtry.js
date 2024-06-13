// Define a Quiz class
class Quiz {
    questions;
    currentQuestionIndex;
    correctAnswers;
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
    }
    // Get the current question
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    // Submit an answer and check if it's correct
    submitAnswer(answerIndex) {
        const question = this.getCurrentQuestion();
        if (answerIndex === question.correctAnswerIndex) {
            this.correctAnswers++;
            return true;
        }
        return false;
    }
    // Move to the next question
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    }
    // Get the quiz result
    getResult() {
        return {
            correct: this.correctAnswers,
            total: this.questions.length
        };
    }
}
// Helper function to simulate async data fetching
const fetchQuizQuestions = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    text: 'What is the capital of France?',
                    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
                    correctAnswerIndex: 2
                },
                {
                    text: 'What is 2 + 2?',
                    options: ['3', '4', '5', '6'],
                    correctAnswerIndex: 1
                },
                {
                    text: 'What is the capital of Japan?',
                    options: ['Beijing', 'Tokyo', 'Seoul', 'Bangkok'],
                    correctAnswerIndex: 1
                }
            ]);
        }, 1000);
    });
};
// Main function to run the quiz
const runQuiz = async () => {
    const questions = await fetchQuizQuestions();
    const quiz = new Quiz(questions);
    console.log('Starting the quiz...');
    // Loop through the questions
    while (true) {
        const question = quiz.getCurrentQuestion();
        console.log(`Question: ${question.text}`);
        question.options.forEach((option, index) => {
            console.log(`${index}: ${option}`);
        });
        // Simulate user input
        const userAnswer = Math.floor(Math.random() * question.options.length); // random answer
        console.log(`User selected: ${userAnswer}`);
        const isCorrect = quiz.submitAnswer(userAnswer);
        console.log(isCorrect ? 'Correct!' : 'Wrong!');
        if (!quiz.nextQuestion()) {
            break;
        }
    }
    const result = quiz.getResult();
    console.log(`Quiz finished! You got ${result.correct} out of ${result.total} questions correct.`);
};
runQuiz();
export {};

// Define the structure of a Question using an interface
interface Question {
    text: string;
    options: string[];
    correctAnswerIndex: number;
}

// Define the structure of a Result using an interface
interface Result {
    correct: number;
    total: number;
}

// Define a Quiz class
class Quiz {
    private questions: Question[];
    private currentQuestionIndex: number;
    private correctAnswers: number;

    constructor(questions: Question[]) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
    }

    // Get the current question
    getCurrentQuestion(): Question {
        return this.questions[this.currentQuestionIndex];
    }

    // Submit an answer and check if it's correct
    submitAnswer(answerIndex: number): boolean {
        const question = this.getCurrentQuestion();
        if (answerIndex === question.correctAnswerIndex) {
            this.correctAnswers++;
            return true;
        }
        return false;
    }

    // Move to the next question
    nextQuestion(): boolean {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    }

    // Get the quiz result
    getResult(): Result {
        return {
            correct: this.correctAnswers,
            total: this.questions.length
        };
    }
}

// Helper function to simulate async data fetching
const fetchQuizQuestions = (): Promise<Question[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    text: 'Which of the following is a valid TypeScript data type?',
                    options: ['number', 'integer', 'decimal', 'float'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'What is the default access modifier for class members in TypeScript?',
                    options: ['public', 'private', 'protected', 'readonly'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'Which keyword is used to define a constant variable in TypeScript?',
                    options: ['const', 'let', 'var', 'constant'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'What is the purpose of the "never" type in TypeScript?',
                    options: ['To represent values that never occur', 'To represent any value', 'To represent null or undefined', 'To represent an array of numbers'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'Which of the following is a correct way to define an interface in TypeScript?',
                    options: [
                        'interface Person { name: string; age: number; }',
                        'interface Person = { name: string; age: number; }',
                        'interface Person: { name: string; age: number; }',
                        'interface Person -> { name: string; age: number; }'
                    ],
                    correctAnswerIndex: 0
                },
                {
                    text: 'How do you specify an optional property in a TypeScript interface?',
                    options: ['property?', 'property!', 'property*', 'property?='],
                    correctAnswerIndex: 0
                },
                {
                    text: 'What is a tuple in TypeScript?',
                    options: ['A fixed-length array with specific types', 'An array with any type', 'A single value', 'A collection of key-value pairs'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'How do you create a read-only property in a TypeScript class?',
                    options: ['readonly propertyName: type;', 'const propertyName: type;', 'let propertyName: type;', 'protected propertyName: type;'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'Which of the following is the correct way to define a generic function in TypeScript?',
                    options: ['function func<T>(arg: T): T', 'function func(arg: T): T', 'function<T> func(arg: T): T', 'func<T>(arg: T): T'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'What does the "as" keyword do in TypeScript?',
                    options: ['Type assertion', 'Type casting', 'Type conversion', 'Type checking'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'How do you define a union type in TypeScript?',
                    options: ['type Variable = Type1 | Type2', 'type Variable = Type1 & Type2', 'type Variable = Type1, Type2', 'type Variable = Type1 || Type2'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'Which of the following is a correct way to handle null and undefined in TypeScript?',
                    options: ['Use "strictNullChecks"', 'Use "strictNullChecks": false', 'Use "nullable"', 'Use "nullish"'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'What is the difference between "interface" and "type" in TypeScript?',
                    options: ['Interfaces can be merged, types cannot', 'Types can be merged, interfaces cannot', 'Interfaces are for primitives, types are for objects', 'Types are for primitives, interfaces are for objects'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'How can you enforce a function to never return in TypeScript?',
                    options: ['By specifying its return type as "never"', 'By specifying its return type as "void"', 'By specifying its return type as "any"', 'By specifying its return type as "null"'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'Which TypeScript utility type makes all properties in an object type optional?',
                    options: ['Partial<T>', 'Required<T>', 'Readonly<T>', 'Pick<T>'],
                    correctAnswerIndex: 0
                },
                {
                    text: 'What is the use of the "extends" keyword in TypeScript?',
                    options: ['To inherit properties from another class or interface', 'To declare a type', 'To implement an interface', 'To initialize a class'],
                    correctAnswerIndex: 0
                }
            ]);
        }, 1000);
    });
}

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
}

runQuiz();

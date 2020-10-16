let quizList = [
    {
        question: "What is the capital of Ethiopia?",
        a: "New Guinea",
        b: "Berlin",
        c: "Addis Ababa",
        d: "Morocco",
        correct: "c"
    },
    {
        question: "What is my name?",
        a: "Aidan",
        b: "Berlin",
        c: "Lennox",
        d: "Brady",
        correct: "a"
    },
    {
        question: "What OS was created by Bill Gates?",
        a: "Temple OS",
        b: "MacOS",
        c: "Windows",
        d: "Doors",
        correct: "c"
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper-translated Man Length",
        b: "Hypertext Markup Language",
        c: "High Tide Marker Light",
        d: "Hyper Text Markup Language",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Cars Sliding Sideways",
        c: "Cat Sack Sunday",
        d: "Coin Sorting System",
        correct: "a"
    },
    {
        question: "What is the name of the main character in Minecraft?",
        a: "Doomguy",
        b: "David",
        c: "Steve",
        d: "John",
        correct: "c"
    },
    {
        question: "What is the most popular selling video game console?",
        a: "Playstation 2",
        b: "Nintendo Switch",
        c: "Atari",
        d: "Flexbox",
        correct: "a"
    },
    {
        question: "Is it Yanny or Laurel?",
        a: "Yanny",
        b: "Laurel",
        c: "Neither",
        d: "Both",
        correct: "d"
    },
    {
        question: "What is my favorite color?",
        a: "Purple",
        b: "Green",
        c: "Blue",
        d: "Black",
        correct: "a"
    },
    {
        question: "What is the capital of the UK?",
        a: "Berlin",
        b: "Arizona",
        c: "London",
        d: "Manchester",
        correct: "c"
    },
    {
        question: "What is the name of Quint’s shark-hunting boat in Jaws?",
        a: "The Whale",
        b: "The Orca",
        c: "The Dolphin",
        d: "The Shark",
        correct: "b"
    },
    {
        question: "What was the first animated movie released?",
        a: "Snow White",
        b: "Fantasia",
        c: "Dumbo",
        d: "Pinocchio",
        correct: "a"
    },
    {
        question: "In what month were all six original Star Wars films released?",
        a: "March",
        b: "April",
        c: "May",
        d: "June",
        correct: "c"
    },
    {
        question: "How many black keys are found on a piano?",
        a: "32",
        b: "34",
        c: "52",
        d: "54",
        correct: "a"
    },
    {
        question: "What team won the NBA game?",
        a: "Boston Celtics",
        b: "New York Knicks",
        c: "Philadelphia 76ers",
        d: "Golden State Warriors",
        correct: "b"
    },
    {
        question: "What is the derivative of 12x?",
        a: "12x^2",
        b: "12",
        c: "5x+4",
        d: "3x-2x",
        correct: "b"
    },
    {
        question: "What is the top number of fraction?",
        a: "Denominator",
        b: "Numerator",
        c: "Decimal",
        d: "Fractional",
        correct: "b"
    },
    {
        question: "What is heavier, a kilogram of steel, or a kilogram of feathers?",
        a: "Kilogram of Feathers",
        b: "Kilogram of Steel",
        c: "Neither",
        d: "They weigh the same",
        correct: "d"
    },
    {
        question: "What is a self-replicating piece of code called?",
        a: "Recursive Method",
        b: "Inheritance Function",
        c: "Virus",
        d: "Rootkit",
        correct: "c"
    },
    {
        question: "In 2020. who was the US President?",
        a: "Vladimir Putin",
        b: "Donald Trump",
        c: "Johannes Ginsburg",
        d: "Fidel Castro",
        correct: "b"
    },
    {
        question: "Which of these words rhyme?",
        a: "Boar and Door",
        b: "Keyboard and Can Opener",
        c: "Alcohol and Brush",
        d: "Soundbar and Desktop",
        correct: "a"
    },
]
let quizRefresh = quizList;

let currentQuestion = document.getElementById('question');
let choiceA = document.getElementById('choice-a');
let choiceB = document.getElementById('choice-b');
let choiceC = document.getElementById('choice-c');
let choiceD = document.getElementById('choice-d');
let answers = document.getElementsByName('answer');
let number = 0;
let questionNum = Math.floor(Math.random() * quizList.length);

//Checks to see if you have finished the quiz, else next question
function question()
{
    questionNum = Math.floor(Math.random() * quizList.length);
    if (number > 9) {
        alert("You have finished the quiz, go grab a soda.\n" + "Correct: " + correct + "\nIncorrect: " + incorrect);
        refreshGame();
        loadQuestion(questionNum);
    }
    else {
        loadQuestion(questionNum);
    }
}

function refreshGame() {
    quizList = quizRefresh;
    number = 0;
    correct = 0;
    incorrect = 0;
}

let correct = 0;
let incorrect = 0;

//Looks for the checked value in the submission and sees if it correct or not
function checkValid()
{
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            if (quizList[questionNum].correct === answers[i].value)
            {
                correct++;
                alert("Correct!");
                answers[i].checked = false;
                quizList.splice(questionNum, 1);
            }
            else
            {
                incorrect++;
                alert("Incorrect!");
                answers[i].checked = false;
                quizList.splice(questionNum, 1);
            }
        }
    }
}

//Allows use of clicking on label to mark answers
function mark(letter) {
    answers[letter].checked = true;
}

//Self-explanatory
function loadQuestion(num)
{
    number++;
    currentQuestion.innerText = (number) + '. ' + quizList[num].question;
    choiceA.innerText = quizList[num].a;
    choiceB.innerText = quizList[num].b;
    choiceC.innerText = quizList[num].c;
    choiceD.innerText = quizList[num].d;
}
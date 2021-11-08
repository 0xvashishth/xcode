const quizDB = [
    {
        question: "Q1: What is the Full Form Of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hypertext Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the Full Form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading style Sheep",
        c: "Cartoon style sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full Form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    }
]


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const badge = document.querySelector('#badge');

let count = 0;
let score = 0;


const loadQuestion = () => {
    question.innerText = quizDB[count].question;
    option1.innerText = quizDB[count].a;
    option2.innerText = quizDB[count].b;
    option3.innerText = quizDB[count].c;
    option4.innerText = quizDB[count].d;
}

loadQuestion();

const getAnswers = () => {
    let answer;

    answers.forEach((currAns) => {
        if (currAns.checked) {
            answer = currAns.id;
        }
    });

    return answer;

};

const uncheckAll = () => {
    answers.forEach(currAns => currAns.checked = false);
}

badge.innerText = `${count+1}/${quizDB.length}`;

submit.addEventListener('click', () => {
    const ansId = getAnswers();
    console.log(ansId);


    if (ansId == quizDB[count].ans) {
        score++;
    }

    count++;

    if(count+1 == quizDB.length)
    {
        submit.innerText = 'Submit';
    }

    

    if (count < quizDB.length) {
        badge.innerText = `${count+1}/${quizDB.length}`;
        uncheckAll();
        loadQuestion();
    } else {
        const showScore = document.querySelector('#showScore');
        showScore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length} ✌</h3>
            <button class="btn btn-primary" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');


    }
});



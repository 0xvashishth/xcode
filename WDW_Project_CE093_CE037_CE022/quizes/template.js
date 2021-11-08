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

badge.innerText = `${count + 1}/${quizDB.length}`;

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
        badge.innerText = `${count + 1}/${quizDB.length}`;
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
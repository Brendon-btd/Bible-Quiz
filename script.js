const questions = [
    {
        question : "Who interpreted Pharaoh's dream about 7 fat and 7 skinny cows?",
        answers: [
            {text:"Joseph ", correct: true},
            {text:"Moses", correct: false},
            {text:"Daniel", correct: false},
            {text:"Aaron", correct: false},
        ]
    },
    {
       question : "How many plagues did God send upon Egypt?",
        answers: [
            {text:"5", correct: false},
            {text:"11", correct: false},
            {text:"6", correct: false},
            {text:"10", correct: true},
        ]  
    },
    {
         question : "What was Peter's profession before following Jesus?",
        answers: [
            {text:"Tax collector", correct: false},
            {text:"Tentmaker", correct: false},
            {text:"Fisherman", correct: true},
            {text:"Carpenter", correct: false},
        ]
    },
    {
         question : "Who was the woman who turned into a pillar of salt?",
        answers: [
            {text:"Lot's wife", correct: true},
            {text:"Miriam", correct: false},
            {text:"Rebekah", correct: false},
            {text:"Naomi", correct: false},
        ]
    },
    {
         question : "Which apostle was exiled to the island of Patmos?",
        answers: [
            {text:"Peter", correct: false},
            {text:"Matthew", correct: false},
            {text:"John", correct: true},
            {text:"King Solomon", correct: false},
        ]
    },
    {
         question : "What was the name of the strong man betrayed by Delilah?",
        answers: [
            {text:"Samson", correct: true},
            {text:"David", correct: false},
            {text:"Saul", correct: false},
            {text:"Absalom", correct: false},
        ]
    },
    {
         question : "What prophet cooked his food over cow dung as a sign to Israel?",
        answers: [
            {text:"Jeremiah", correct: false},
            {text:"Hosea", correct: false},
            {text:"Elijah", correct: false},
            {text:"Ezekiel", correct: true},
        ]
    },
    {
         question : "What did Jesus say one must do to enter the Kingdom of God?",
        answers: [
            {text:"Be baptized in the sea", correct: false},
            {text:"Be born again", correct: true},
            {text:"Follow Moses law", correct: false},
            {text:"Keep the 10 Commandments", correct: false},
        ]
    },
    {
         question : "What kind of insect did John the Baptist eat in the wilderness?",
        answers: [
            {text:"Beetles", correct: false},
            {text:"Locusts", correct: true},
            {text:"Grasshoppers", correct: false},
            {text:"Crickets", correct: false},
        ]
    },
    {
         question : "What book comes after the four Gospels?",
        answers: [
            {text:"Acts", correct: true},
            {text:"Revelation", correct: false},
            {text:"Hebrews", correct: false},
            {text:"Romans", correct: false},
        ]
    },
     {
         question : "Who wrote the book of Revelation?",
        answers: [
            {text:"Paul", correct: false},
            {text:"Matthew", correct: false},
            {text:"John", correct: true},
            {text:"Peter", correct: false},
        ]
    },
    {
         question : "Who wrote most of the Psalms?",
        answers: [
            {text:"David", correct: true},
            {text:"Solomon", correct: false},
            {text:"Moses", correct: false},
            {text:"Asaph", correct: false},
        ]
    },
    {
         question : "What did Jesus do just before raising Lazarus?",
        answers: [
            {text:"Knocked on the tomb", correct: false},
            {text:"Wept", correct: true},
            {text:"Asked for bread", correct: false},
            {text:"Prayed silently", correct: false},
        ]
    },
    {
         question : "Which prophet saw a vision of a valley of dry bones?",
        answers: [
            {text:"Elijah", correct: false},
            {text:"Ezekiel ", correct: true},
            {text:"Isiah", correct: false},
            {text:"Jeremiah", correct: false},
        ]
    },
        {
         question : "Who reigned as queen of Persia and saved the Jews from destruction?",
        answers: [
            {text:"Deborah", correct: false},
            {text:"Miriam", correct: false},
            {text:"Esther", correct: true},
            {text:"Racheal", correct: false},
        ]
    },
    {
         question : "Who was the only female judge of Israel mentioned in the Bible?",
        answers: [
            {text:"Deborah", correct: true},
            {text:"Jael", correct: false},
            {text:"Miriam", correct: false},
            {text:"Esther", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currntQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currntQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currntQuestion = questions[currntQuestionIndex];
    let questionNo = currntQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currntQuestion.question;

    currntQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currntQuestionIndex++;
    if(currntQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currntQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();

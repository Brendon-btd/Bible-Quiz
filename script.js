const questions = [
    {
        question : "What was the first miracle Jesus performed?",
        answers: [
            {text:"Turning water into wine ", correct: true},
            {text:"Healing a blind man", correct: false},
            {text:"Feeding 5000", correct: false},
            {text:"Raising Lazarus", correct: false},
        ]
    },
    {
       question : "What is the shortest verse in the Bible?",
        answers: [
            {text:"God is love.", correct: false},
            {text:"Rejoice always.", correct: false},
            {text:"Pray without ceasing.", correct: false},
            {text:"Jesus wept.", correct: true},
        ]  
    },
    {
         question : "What was the name of Abraham’s brother who was the father of Lot?",
        answers: [
            {text:"Simon", correct: false},
            {text:"Andrew", correct: false},
            {text:"Haran", correct: true},
            {text:"Laban", correct: false},
        ]
    },
    {
         question : "How many times did Paul receive 39 lashes?",
        answers: [
            {text:"Five times", correct: true},
            {text:"Three times", correct: false},
            {text:"Seven times", correct: false},
            {text:"Ten times", correct: false},
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
         question : "Who stole household gods from her father and sat on them to hide them?",
        answers: [
            {text:"Rachel", correct: true},
            {text:"Leah", correct: false},
            {text:"Miriam", correct: false},
            {text:"Deborah", correct: false},
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
         question : "Who led the Israelites into the Promised Land after Moses died?",
        answers: [
            {text:"Aaron", correct: false},
            {text:"Joshua", correct: true},
            {text:"Phinehas", correct: false},
            {text:"Gideon", correct: false},
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
         question : "How many people were saved on Noah’s Ark?",
        answers: [
            {text:"Eight", correct: true},
            {text:"Six", correct: false},
            {text:"Ten", correct: false},
            {text:"Twelve", correct: false},
        ]
    },
     {
         question : "What did God provide from heaven for the Israelites to eat in the desert?",
        answers: [
            {text:"Quail only", correct: false},
            {text:"Bread", correct: false},
            {text:"Manna", correct: true},
            {text:"Figs", correct: false},
        ]
    },
    {
         question : "What city’s walls fell down after the Israelites marched around them for 7 days?",
        answers: [
            {text:"Jericho", correct: true},
            {text:"Damascus", correct: false},
            {text:"Hebron", correct: false},
            {text:"Bethlehem", correct: false},
        ]
    },
    {
         question : "What was the occupation of Matthew before following Jesus?",
        answers: [
            {text:"Fisherman", correct: false},
            {text:"Tax Collector", correct: true},
            {text:"Tent Maker", correct: false},
            {text:"Shepherd", correct: false},
        ]
    },
    {
         question : "How did the apostle Paul escape from Damascus?",
        answers: [
            {text:"Through the front gate at night", correct: false},
            {text:"In a basket through a window in the wall ", correct: true},
            {text:"Disguised as a guard", correct: false},
            {text:"Hiding in a caravan", correct: false},
        ]
    },
        {
         question : "What was the name of the garden where Jesus prayed before His arrest?",
        answers: [
            {text:"Golgotha", correct: false},
            {text:"Garden of Eden", correct: false},
            {text:"Gethsemane", correct: true},
            {text:"Mount of Olives", correct: false},
        ]
    },
    {
         question : "Who was the first king of Israel?",
        answers: [
            {text:"Saul", correct: true},
            {text:"David", correct: false},
            {text:"Solomon", correct: false},
            {text:"Samuel", correct: false},
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
//alert("There are 4 questions and you have a minute and 15 seconds.")

var seconds = 3;

var questions = [
    {
        q: "Is boolean a data type?",
        answers: ["yes", "no", "maybe"],
        c: 0
    },
    {
        q: "Is flexbox good?",
        answers: ["yes", "no", "maybe"],
        c: 0
    },
    
];


$("#choice1").on("click", function () {
    startQuiz();
})


function startQuiz() {
    var i = 1;
    var interval = setInterval(() => {
        $("#timer").text("Timer:   " + seconds);
        if (seconds < 1) {
            clearInterval(interval);
        }
        seconds--;
    }, 1000);

    loadQuestions(i);
    loadAnswers(i);


};

function loadQuestions(index) {
    $("#questions")
    .text(questions[index].q);
};

function loadAnswers(index) {
    $("#choice2")
        .text(questions[index].answers[0])
        .on("click", function () {
            checkAnswer(index, 0);
        })
    $("#choice3")
        .text(questions[index].answers[1])
        .on("click", function () {
            checkAnswer(index, 1);
        })
    $("#choice4")
        .text(questions[index].answers[2])
        .on("click", function () {
            checkAnswer(index, 2);
        })
}

function checkAnswer(i1, i2) {
    console.log(questions[i1].c, i2);

    if (i2 === questions[i1].c) {
        alert("Correct")
    } else {
        alert("Wrong")
    }
    
}
// end function, display question
var seconds = 75;
var score = 0;
var indexVal = 0;
var questions = [
    {
        q: "Commonly used data types Do Not include: ",
        a: ["Strings", "Booleans", "Alerts", "Numbers"],
        c: "Alerts"
    },
    {
        q: "A very useful tool used during development and debugging for printing content to thee debugger is: ",
        a: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        c: "console.log"
    },
    {
        q: "The  condition in an if / else statement is enclosed with _____",
        a: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        c: "parenthesis"
    },
    {
        q: "Arrayd in JavaScript can be used to store ____",
        a: ["numbers and strings", "other arrays", "booleans", "all of the  above"],
        c: "all of the  above"
    },

];

function frontPage() {
    $("#title")
        .text("Coding Quiz Challenge");
    $("#intro-text")
        .text("Try to answer the following code-related questions within the time limit." +
            "Keep in mind that incorrect answers will penalize your score/time by ten secends!");
    $("#questions")
        .append(
            $(document.createElement('button'))
                .prop({
                    type: "button",
                    id: "start",
                    class: "col-3 just-fy-content-around",
                    innerHTML: "Start Quiz!",
                })
        )
    $("#start")
        .on("click", function () {
            startQuiz();
        });
    $("#highscores")
        .on("click", endQuiz);
    $("#choice1")
        .hide()
    $("#choice2")
        .hide()
    $("#choice3")
        .hide()
    $("#choice4")
        .hide()
};

function startQuiz() {
    var interval = setInterval(() => {
        $("#timer").text("Timer:   " + seconds);
        if (seconds < 1) {
            clearInterval(interval);
            endQuiz;
        }
        seconds--;
    }, 1000);
     if( indexVal < questions.length){
        loadQuestions(indexVal);
        console.log(indexVal);
     };
};

function endQuiz() {
    $("#title")
        .text("All Done!");
    $("#intro-text")
        .text("Your final score is: " + score);
    $("#choice1")
        .hide()
    $("#choice2")
        .hide()
    $("#choice3")
        .hide()
    $("#choice4")
        .hide()
};

function highScoresPage() {

};

function loadQuestions(index) {
    $("#highscores")
        .hide();
    if (index < questions.length) {
        $("#questions")
            .text(questions[index].q);
        loadAnswers(index);
    } else {
        endQuiz();
    }
};

function loadAnswers(index) {
     $("#choice1")
         .show()
         .text(questions[index].a[0])
         .on("click", function () {
             var picked = $(this).text();
             checkAnswer(picked);
             loadQuestions(indexVal);
         });
     $("#choice2")
         .show()
         .text(questions[index].a[1])
         .on("click", function () {
             var picked = $(this).text();
             checkAnswer(picked);
             loadQuestions(indexVal);
        });
    $("#choice3")
        .show()
        .text(questions[index].a[2])
        .on("click", function () {
            console.log(index);
            var picked = $(this).text();
            checkAnswer(picked);
            loadQuestions(indexVal);
        });
     $("#choice4")
         .show()
         .text(questions[index].a[3])
         .on("click", function () {
             var picked = $(this).text();
             checkAnswer(picked);
             loadQuestions(indexVal);
         });
}

function checkAnswer(i) {
    console.log(i, questions[indexVal].c);

    if (questions[indexVal].c === i) {
        $(".response")
            .text("Correct");
    } else {
        $(".response")
            .text("Wrong");
        seconds -= 10;
    } 
    indexVal++;
};

frontPage();
// end function, display question
//alert("There are 4 questions and you have a minute and 15 seconds.")

var seconds = 75;
var qI = 0;
var aI = 0;
var questions = [
    {
        q: "Is boolean a data type?",
        answers: ["yes", "no", "maybe", "boolean?"],
        c: 0
    },
    {
        q: "Is flexbox good?",
        answers: ["yes", "no", "maybe", "flexbox?"],
        c: 0
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
                    innerHTML: "Start Quiz!",
                })
        )
    $("#start")
        .on("click", function () {
            startQuiz(0, 0);
        });
    $("choice1")
        .hide()
    $("choice2")
        .hide()
    $("choice3")
        .hide()
    $("choice4")
        .hide()
};

function startQuiz(x, y) {

    var interval = setInterval(() => {
        $("#timer").text("Timer:   " + seconds);
        if (seconds < 1) {
            clearInterval(interval);
        }
        seconds--;
    }, 1000);
    qI = x;
    aI = y;
    loadQuestions(qI);
    loadAnswers(aI);

};

function loadQuestions(index) {
    $("#questions")
        .text(questions[index].q);
    qI++;
};

function loadAnswers(index) {
    $("#choice1")
        // .append(
        //     $(document.createElement('button')).prop({
        //         type: 'button',
        //         innerHTML: questions[index].answers[0],
        //     })
        // )
        .show()
        .text(questions[index].answers[0])
        .on("click", function () {
            var picked = $("#choice2").text();
            checkAnswer(index, picked);
            qI++;
            aI++;
            loadQuestions(qI);
            loadAnswers(aI);
        });
    $("#choice2")
        // .append(
        //     $(document.createElement('button')).prop({
        //         type: 'button',
        //         innerHTML: questions[index].answers[1],
        //     })
        // )
        .show()
        .text(questions[index].answers[1])
        .on("click", function () {
            var picked = $("#choice2").text();
            checkAnswer(index, picked);
            qI++;
            aI++;
            loadQuestions(qI);
            loadAnswers(aI);
        });
    $("#choice3")
        // .append(
        //     $(document.createElement('button')).prop({
        //         type: 'button',
        //         innerHTML: questions[index].answers[2],
        //     })
        // )
        .show()
        .text(questions[index].answers[2])
        .on("click", function () {
            var picked = $("#choice2").text();
            checkAnswer(index, picked);
            qI++;
            aI++;
            loadQuestions(qI);
            loadAnswers(aI);
        });
    $("#choice4")
        // .append(
        //     $(document.createElement('button')).prop({
        //         type: 'button',
        //         innerHTML: questions[index].answers[3],
        //     })
        // )
        .show()
        .text(questions[index].answers[3])
        .on("click", function () {
            var picked = $("#choice2").text();
            checkAnswer(index, picked);
            qI++;
            aI++;
            loadQuestions(qI);
            loadAnswers(aI);
        });
}

function checkAnswer(i1, i2) {
    console.log(questions[i1].c, i2);

    if (i2 === questions[i1].c) {
        alert("Correct");
    } else {
        alert("Wrong");
        seconds -= 10;
    }

}

frontPage();
// end function, display question
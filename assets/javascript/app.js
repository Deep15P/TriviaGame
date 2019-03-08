$(document).ready(function (){ 

    // let correctAnswer = "Great job";
    // let wrongAnswer = "You Suck! Try Again you bum!";


    let questions = [{

        question: "My birthday is in August!",
        answerChoices: ["true", "false"],
        answer: true,

    },
    {
        question: "I was born in India!",
        answerChoices: ["true", "false"],
        answer: true,
    },
    {
        question: "I use apple products!",
        answerChoices: ["true", "false"],
        answer: true,
    },
    {
        question: "I can breakdance!",
        answerChoices: ["true", "false"],
        answer: true,
    },
    {
        question: "I ran track in high school!",
        answerChoices: ["true", "false"],
        answer: true,
    },
    {
        question: "I don't like reading!",
        answerChoices: ["true", "false"],
        answer: false,
    },
    {
        question: "I have great taste in fashion",
        answerChoices: ["true", "false"],
        answer: true,
    },
    {
        question: "I own a dog!",
        answerChoices: ["true", "false"],
        answer: false,
    }];

var correctAnswerCount = 0;
var wrongAnswerCount = 0;
// var unansweredCount = 0;
var running = false;
var timer = 15;
var intervalId;
var userGuess = "";
var holder = [];
// var pick;


//click start button to start game
$("#start").on("click", function () {
    $("#start").hide();
    displayQuestion();
    runTimer();
    for(var i = 0; i < questions.length; i++) {
holder.push(questions[i]);
}
});

function displayQuestion() {

    for (i = 0; i < questions.length; i++) {
        // grabs questions from the array
        let question = $("<p>" + questions[i].question + "<br>")
        $("#trivia").append(question);


        for (j = 0; j < questions[i].answerChoices.length; j++) {
            let answers = $("<button>" + questions[i].answerChoices[j] + "<br>");
            answers.attr("data", questions[i].answerChoices[j]).addClass("answer");
            console.log(answers)
            $("#trivia").append(answers);
        }
    
    }
}

// Timer start 
function runTimer () {
    if (!running) {
        intervalId = setInterval(decrement, 1000);
        running = true;
    }
}
// Timer countdown
function decrement () {
    $("#timeleft").html("<h2> Time remaning: " + timer + "<h3>");
    timer --;


    if (timer === 0) {
        // unansweredCount++;
        stop();
        $("#answerblock").html("<p> Times up! You loose you bum! </p>")
        $("#trivia").hide();
        scoreboard();
    }
}

function stop() {
	// running = false;
	clearInterval(intervalId);
}

function scoreboard() {
    
    $("#correctAlert").html("<p> Correct Answers: " + correctAnswerCount + "</p>")
    $("#wrongAnswersAlert").html("<p> Wrong Answers: " + wrongAnswerCount + "</p>")
    $("#unansweredAlert").html("<p> Unanswered: " + unansweredCount + "</p>")
    
}

$(document).on("click",".answer", function(event) {

   let userGuess = $(this).attr("data");
    console.log(userGuess);

    if (userGuess === true) {
        // stop();
        correctAnswerCount++;
        userGuess=""
        // let userGuess= $(this).attr("data");
        // $("#answerblock").html("<p>Great job!</p>");
    }

    else if (userGuess === false) {
        wrongAnswerCount++;
        userGuess="";
        // stop();
    }

    
        // userGuess="";
        // $("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
    
    
})

});


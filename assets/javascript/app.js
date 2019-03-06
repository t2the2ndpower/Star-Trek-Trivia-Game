// my stupendous Star Trek Trivia Game

/* 

ID's from html divs

"timer" - the place the timer should go
"startBtn" - the start button
"gameStats" - the section that holds gameplay info
"gamePts" - the html area to display game points
"selectedPlay" - the html area to display what the player has selected as an answer
"playComm" - the area that holds communications we want to display to the player
"playNews" - commentary on the game as it's beening played
"thanks" - the thanks for playing message
"questImg" - the place where the image associated with the question should be displayed
"thisQuestion" - the place where the question in play should appear
"theseAnswers" - the place where the answer options should appear





*/


// Variables to be used

var wins; // holds the count for wins achieved

var losses; // holds the count for losses achieved

var remainingTime;  // counts down the time

var answerOptions;  //  an array of answer options

var answerOptIndex;  //  the randomly generated index number used to determine the question to ask and the associated answer

var wrongAnswers;  //  an array of wrong answer options

var wrongAnsIndex;  //  the randomly generated index number used to determine the series of wrong answers to display alongside the correct answer



// Array of Objects for questions and answers

var questions = [

    {
        ques: "Who was the lead in the original pilot for the successful TV science fiction show Star Trek?",
        ans: "Jeffrey Hunter",
        pic: "Star Trek 1.jpg"
    },
    {
        ques: "What size crew did Captain Kirk command aboard the starship Enterprise?",
        ans: "Kirk's crew numbered 430.",
        pic: "Star Trek 2.jpg"        
    },
    {
        ques: "The Wrath of Khan was what number Star Trek movie?",
        ans: "II",
        pic: "Star Trek 3.jpg"        
    },
    {
        ques: "What famous former Star Trek actor directed Three Men and a Baby?",
        ans: "Leonard Nimoy",
        pic: "Star Trek 4.jpg"        
    },
    {
        ques: "In TV's original Star Trek series, how did a salt shaker serve as a prop on early episodes?",
        ans: "Dr. McCoy used it for a medical scanner.",
        pic: "Star Trek 5.jpg"        
    },
];

// array of wrong options

var wrongAnswers = [
    "Luxana Troy",
    "The Borg",
    "III",
    "Data",
    "Jean Luc Picard",
    "William Shatner",
    "Chris Pine",
    "Zoe Saldana",
    "The Genesis Machine",
    "Byrillium Chrystals",
    "Transporter Machine",
    "Phaser set to Stun",
    "Tri-corder",
    "Holodeck",
    "Guinaan",
    "Excelsior",
    "Far Point Station",
    "The Emissary",
    "Cloaking Device",
    "Romulus",
    "Ferengi",
    "Tribbles",
    "Lutinant Uhuru",
    "Warf",
    "Jordi",
    "Number 1",
    "Westley Crusher"
];


// on click function to start the game

$("btn").click("start the game");

// timer that displays the countdown to the next question

var remainingTime = setInterval(myTimer, 1000);
var timeLeft = 30;
function myTimer() {
  //var newTimeLeft = timeLeft - 1;
  document.getElementById("timer").innerHTML = (timeLeft--);
  //return newTimeLeft = timeLeft;

  if(timeLeft === -1){
clearInterval(remainingTime);
  }
};

remainingTime;

// timer that marks and answer wrong if time runs out and starts over with a new question once time is up

 function remainingTime (){

};


// a random index number to use as a selection method for determining the question to ask

var answerOptIndex = Math.floor(Math.random(1) * questions.length);

// a random index number to use as a selection method for gathering all of the wrong answers

var wrongAnsIndex = Math.floor(Math.random(1) * wrongAnswers.length);

// the for loop that will generate 3 wrong answers to display along side the correct answer

for(var i = 1; i < 4; i++){

    var wrongAnsIndex = Math.floor(Math.random(1) * wrongAnswers.length);

    answerOptions.push (wrongAnsIndex);
};


// a <ul> of guesses that include the wrong and right guesses


// the total number of correct and incorrect guesses

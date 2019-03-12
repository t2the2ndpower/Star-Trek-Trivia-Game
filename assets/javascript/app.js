// My Stupendous Star Trek Trivia Game (aka, time keeps on slippin, slippin, slippin...)

// I had high hopes for this game, but as you can tell by the progression of increasing comments and console.logs, this one decended into sillyness.
//  Here are the list of issues, UGH
//  1) unable to clear the interval upon ANYTHING other than the counter being less than 0 (not a button click or an evil stare, smh)
//  2) FIXED: my array of answer just kept growing and growing and growing.  I've discoverd that I'm good at over complicating things I guess
//  3) I had wanted the next question to automatically populate 5 seconds after a guess had been made.
//  3) I didn't get to code the 5th round endgame hoorah that I had hoped for.


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

var wins = 0; // holds the count for wins achieved

var losses = 0; // holds the count for losses achieved

var remainingTime;  // counts down the time

var answerOptions = [];  //  an array of answer options

var answerOptIndex = [];  //  the randomly generated index number used to determine the question to ask and the associated answer

var wrongAnswers;  //  an array of wrong answer options

var wrongAnsIndex;  //  the randomly generated index number used to determine the series of wrong answers to display alongside the correct answer

var wrongAnsIndexes = [];

var gameAnswers = [];

// Array of Objects for questions and answers

var questions = [

    {
        ques: "Who was the lead in the original pilot for the successful TV science fiction show Star Trek?",
        ans: "Jeffrey Hunter",
        pic1: "Star_Trek_1a.jpg",
        pic2: "Star_Trek_1b.jpg"
    },
    {
        ques: "What size crew did Captain Kirk command aboard the starship Enterprise?",
        ans: "Kirk's crew numbered 430",
        pic1: "Star_Trek_2a.jpg",
        pic2: "Star_Trek_2b.jpg"
    },
    {
        ques: "The Wrath of Khan was what number Star Trek movie?",
        ans: "II",
        pic1: "Star_Trek_3a.jpg",
        pic2: "Star_Trek_3b.jpg"
    },
    {
        ques: "What famous former Star Trek actor directed Three Men and a Baby?",
        ans: "Leonard Nimoy",
        pic1: "Star_Trek_4a.jpg",
        pic2: "Star_Trek_4b.jpg"
    },
    {
        ques: "In TV's original Star Trek series, how did a salt shaker serve as a prop on early episodes?",
        ans: "Dr. McCoy used it for a medical scanner",
        pic1: "Star_Trek_5a.jpg",
        pic2: "Star_Trek_5b.jpg"
    },
    {
        ques: "What was antimatter used for on the starship Enterprise on the Star Trek TV series?",
        ans: "To power the ships engines",
        pic1: "Star_Trek_6a.jpg",
        pic2: "Star_Trek_6b.jpg"
    },
    {
        ques: "What is in Mr. Spock's blood that gives him green skin?",
        ans: "Traces of nickel and copper",
        pic1: "Star_Trek_7a.jpg",
        pic2: "Star_Trek_7b.jpg"
    },
    {
        ques: "In the original draft for the Star Trek TV series what was the name of the U.S.S. Enterprise?",
        ans: "The U.S.S. Yorktown",
        pic1: "Star_Trek_8a.jpg",
        pic2: "Star_Trek_8b.jpg"
    },
    {
        ques: "In the Star Trek series, the part of Ensign Chekov  was played by who?",
        ans: "Walter Koenig",
        pic1: "Star_Trek_9a.jpg",
        pic2: "Star_Trek_9b.jpg"
    },
    {
        ques: "Apart from Star Trek, the actors Kirk, Scott, Spock, and Sulu appeared on what other program?",
        ans: "The Twilight Zone",
        pic1: "Star_Trek_10a.jpg",
        pic2: "Star_Trek_10b.jpg"
    },
    {
        ques: "In Star Trek, what is the name of Mr.  Spock's father?",
        ans: "Sarek",
        pic1: "Star_Trek_11a.jpg",
        pic2: "Star_Trek_11b.jpg"
    },
    {
        ques: "On the first Star Trek movie, who was the science advisor?",
        ans: "Isaac Asimov",
        pic1: "Star_Trek_12a.jpg",
        pic2: "Star_Trek_12b.jpg"
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
    "IV",
    "Guinaan",
    "The USS Excelsior",
    "Far Point Station",
    "The Emissary",
    "Cloaking Device",
    "V",
    "Romulus",
    "Ferengi",
    "Tribbles",
    "Lieutenant Uhura",
    "Warf",
    "VII",
    "Jordi",
    "Number 1",
    "Westley Crusher",
    "Tribbles",
    "Vulcan Mind Meld",
    "Vulcan Death Grip",
    "An Android"
];


// *** WORKING: on click function to start the game

$("#startBtn").on("click", function () {
    $("#aList").html("");
    $("#startBtn").hide("#startBtn");
    $("#triviaSec").show("#etriviaSec");
    $("#guessResults").html("");
    
    
    genQandA();

    // *** WORKING timer that displays the countdown to the next question: JUST CANT GET IT to STOP!!! (stupid timer)

    var remainingTime = setInterval(myTimer, 1000);
    var timeLeft = 30;
    function myTimer() {
        //var newTimeLeft = timeLeft - 1;
        document.getElementById("timer").innerHTML = (timeLeft--);
        //return newTimeLeft = timeLeft;

        if (timeLeft === -1) {

            losses++;
            clearInterval(remainingTime);
            $("#startBtn").html("Next Round");
            $("#startBtn").show("#startBtn");
            $("#thisQuestion").html("<h2>Outta Time!</h2>");
            $("#gameStats").html("<h3>Wins: " + wins + "<br>Losses: " + losses);

        }
    };

    //myTimer();
});

    // remainingTime;  

// *** timer that marks and answer wrong if time runs out and starts over with a new question once time is up

    // function remainingTime (){

    //};   // *** commented out until I pair it with the onclick button function

// *** WORKING:  put the generation of random question and answer index numbers in a function

function genQandA() {





// *** WORKING: a random index number to use as a selection method for determining the question to ask

    var answerOptIndex = Math.floor(Math.random(1) * questions.length);

// *** WORKING: display the randomly selected question

    $("#thisQuestion").html("<h2>" + questions[answerOptIndex].ques + "</h2>");
    $("#questImg").html("<p><img src=assets/images/" + questions[answerOptIndex].pic1 + " height = 400px></p>");



    console.log("here is the question " + questions[answerOptIndex].ques);
    console.log("here is the ans " + questions[answerOptIndex].ans);
    console.log("here is the index " + answerOptIndex);
    console.log("here is the pic " + questions[answerOptIndex].pic);

// *** WORKING: a random index number to use as a selection method for gathering all of the wrong answers

    var wrongAnsIndex = Math.floor(Math.random(1) * wrongAnswers.length);


// *** WORKING: the for loop that will generate 3 wrong answers to display along side the correct answer

    for (var i = 1; i < 4; i++) {

        var wrongAnsIndex = Math.floor(Math.random(1) * wrongAnswers.length);

        console.log("wrong index = " + wrongAnsIndex);

        //answerOptions.push(wrongAnsIndex);  // need to figure out why the push isn't working, FIXED IT: need to change the variable
        wrongAnsIndexes.push(wrongAnsIndex);
        gameAnswers.push(wrongAnswers[wrongAnsIndex]);



        //return wrongAnsIndexes;

    };
    console.log("here is the array of a string of wrong ans: " + gameAnswers);
    console.log("this is the wrongAnsIndexes = " + wrongAnsIndexes);


    // hoping this will remove the correct answer index number from the array if it exists. not so much
    //answerOptions.pop(answerOptIndex);  

    // trying a 'remove array value' function I found, still doesn't work, oh well I'll try later, need to finish
    // function arrayRemove(wrongAnsIndexes, answerOptIndex) {

    //     return wrongAnsIndexes.filter(function (ele) {
    //         return ele != answerOptIndex;
    //     });

    // }

    // var result = arrayRemove(wrongAnsIndexes, answerOptIndex);

    // console.log("the removed resulsts array, maybe? " + arrayRemove);


    // lets see the resulting finished array 

    console.log("wrong answer index = " + answerOptions);

// *** WORKING: a function that pushes the correct answers index number in to the answerOptions array and displays the indexes in a random order (dun dun DUN!!!)

    // currently I have an index number that is displaying twice, ugh!
    function makeAnsOptArray() {
        answerOptions.push(answerOptIndex);
        answerOptions.push(wrongAnsIndexes); // FOUND IT!!! this was alreay inserted into the array in the forLoop above so I added a seperate var wongAnsIndexes

        console.log("this is the array of answer options: " + answerOptions);

    }

    makeAnsOptArray();

    // need to create the array of actual possible answers by pulling in the correct one with the incorrect one first, then randomizing them, and THEN display them

    function gameAnsArray() {

        gameAnswers.push(questions[answerOptIndex].ans);

        console.log("these are the game answers: " + gameAnswers);

    };

    gameAnsArray();

// *** WORKING: trying an array shuffler - after getting the actual values above need to shuffle them so the correct answer isn't in the same position each time a trivia question is displayed

    function shuffle(gameAnswers) {
        var m = gameAnswers.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = gameAnswers[m];
            gameAnswers[m] = gameAnswers[i];
            gameAnswers[i] = t;
        }

        return gameAnswers;
    }

    shuffle(gameAnswers);

    console.log("these should be randomized " + gameAnswers);

// *** WORKING VERSION:  This one works but needed to change the input array as shown above

    // function shuffle(answerOptions) {
    //     var m = answerOptions.length, t, i;

    //     // While there remain elements to shuffle…
    //     while (m) {

    //         // Pick a remaining element…
    //         i = Math.floor(Math.random() * m--);

    //         // And swap it with the current element.
    //         t = answerOptions[m];
    //         answerOptions[m] = answerOptions[i];
    //         answerOptions[i] = t;
    //     }

    //     return answerOptions;
    // }

    // shuffle(answerOptions);

    //console.log("these should be random " + answerOptions);

    console.log("these should be random and consoled out " + answerOptions);

// *** WORKING:  a <ul> of guesses that include the wrong and right guesses: can I automatically create <p> tags with each indexed item in it?

    //$("#theseAnswers").html("<ul>" + gameAnswers + "</ul>");


    // trying out this solution IT WORKED!!!

    $.each(gameAnswers, function (i) {

        // $("#aList").append("<li>" + gameAnswers[i] + "</li>");
        $("#aList").append('<li id=' + gameAnswers[i].replace(/\s+/g, '') + '>' + gameAnswers[i] + '</li>');  // putting the answers as an id in the li tag to reference for on click event.  removed the white spaces from the id tag.

        console.log(this);

    })

//  *** WORKING:   now I need to make them clickable

    $("li").on("click", function (event) {


        // if statement goes here: if id of clicked = questionsAns.replace(/\s+/g, '') then add 1 point to wins, else add 1 point to losses

        if (this.id === questions[answerOptIndex].ans.replace(/\s+/g, '')) {

            // need the timer to stop and the next round button to appear upon winning guess STUPID TIMER

            clearInterval(remainingTime);
            wins++;
            $("#questImg").html("<p><img src=assets/images/" + questions[answerOptIndex].pic2 + " height = 400px></p>");
            $("#guessResults").html("<h2>CORRECT YOU GENIUS YOU!</h2> The answer is...  <br><h2><br>" + questions[answerOptIndex].ans + "</h2>");
            $("#pick").html("");
            $("#aList").html("");
            $("#startBtn").html("Next Round");
            $("#startBtn").show("#startBtn");
            $("#gameStats").html("<h3>Wins: " + wins + "<br>Losses: " + losses);
            $("#timer").html("0");

            // just trying to clear everything out so that the next round starts fresh
            remainingTime = 0;
            wrongAnsIndexes = [];
            wrongAnsIndex = [];
            gameAnswers = [];
            answerOptIndex = [];
            answerOptions = [];
            


            console.log("this should clear out a few arrays, like wrongAnsIndex: " + wrongAnsIndex + "and gameAnswers: " + gameAnswers);

            //console.log("correct click!" + questions[answerOptIndex].ans.replace(/\s+/g, ''));
            console.log("Losses!" + losses);
            console.log("Wins!" + wins);

        } else {

            losses++;
            $("#questImg").html("<p><img src=assets/images/" + questions[answerOptIndex].pic2 + " height = 400px></p>");
            $("#guessResults").html("<h2>INCORRECT!</h2>You may actually need to ask somebody, ijs.<br> The answer is... <br><h2><br>" + questions[answerOptIndex].ans + "</h2>");
            $("#pick").html("");
            $("#aList").html("");
            $("#startBtn").html("Next Round");
            $("#startBtn").show("#startBtn");
            $("#gameStats").html("<h3>Wins: " + wins + "<br>Losses: " + losses);

            //  again, just trying to clear everything out for the next round
            remainingTime = 0;
            wrongAnsIndexes = [];
            wrongAnsIndex = [];
            gameAnswers = [];
            answerOptIndex = [];
            answerOptions = [];

            console.log("incorrect click!" + questions[answerOptIndex].ans.replace(/\s+/g, ''));
            console.log("Losses!" + losses);
            console.log("Wins!" + wins);

        };


        console.log("I clicked it!");



    });


};
// *** WORKIG:  the total number of correct and incorrect guesses:   Included them in the if statement

// *** need to put all of this within the time element i think,



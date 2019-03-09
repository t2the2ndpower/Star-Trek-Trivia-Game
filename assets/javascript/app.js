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

    var answerOptions = [];  //  an array of answer options

    var answerOptIndex;  //  the randomly generated index number used to determine the question to ask and the associated answer

    var wrongAnswers;  //  an array of wrong answer options

    var wrongAnsIndex;  //  the randomly generated index number used to determine the series of wrong answers to display alongside the correct answer

    var wrongAnsIndexes = [];

// Array of Objects for questions and answers

    var questions = [

        {
            ques: "Who was the lead in the original pilot for the successful TV science fiction show Star Trek?",
            ans: "Jeffrey Hunter",
            pic: "Star_Trek_1.jpg"
        },
        {
            ques: "What size crew did Captain Kirk command aboard the starship Enterprise?",
            ans: "Kirk's crew numbered 430.",
            pic: "Star_Trek_2.jpg"
        },
        {
            ques: "The Wrath of Khan was what number Star Trek movie?",
            ans: "II",
            pic: "Star_Trek_3.jpg"
        },
        {
            ques: "What famous former Star Trek actor directed Three Men and a Baby?",
            ans: "Leonard Nimoy",
            pic: "Star_Trek_4.jpg"
        },
        {
            ques: "In TV's original Star Trek series, how did a salt shaker serve as a prop on early episodes?",
            ans: "Dr. McCoy used it for a medical scanner.",
            pic: "Star_Trek_5.jpg"
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


// *** on click function to start the game

    $("btn").click("start the game");

// *** WORKING timer that displays the countdown to the next question

    var remainingTime = setInterval(myTimer, 1000);
    var timeLeft = 30;
    function myTimer() {
        //var newTimeLeft = timeLeft - 1;
        document.getElementById("timer").innerHTML = (timeLeft--);
        //return newTimeLeft = timeLeft;

        if (timeLeft === -1) {
            clearInterval(remainingTime);

        }
    };

// remainingTime;  

// *** timer that marks and answer wrong if time runs out and starts over with a new question once time is up

// function remainingTime (){

//};   // *** commented out until I pair it with the onclick button function


// *** WORKING: a random index number to use as a selection method for determining the question to ask

    var answerOptIndex = Math.floor(Math.random(1) * questions.length);

// *** WORKING: display the randomly selected question

    $("#thisQuestion").html("<h2>" + questions[answerOptIndex].ques + "</h2>");
    $("#questImg").html("<p><img src=assets/images/" + questions[answerOptIndex].pic + " height = 450px></p>");



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

        //return wrongAnsIndexes;

    };

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

        // trying an array shuffler

        function shuffle(answerOptions) {
            var m = answerOptions.length, t, i;

            // While there remain elements to shuffle…
            while (m) {

                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = answerOptions[m];
                answerOptions[m] = answerOptions[i];
                answerOptions[i] = t;
            }

            return answerOptions;
        }

        shuffle(answerOptions);

//console.log("these should be random " + answerOptions);
    }

    makeAnsOptArray();

console.log("these should be random and consoled out " + answerOptions);

// *** NEXT TASK:  a <ul> of guesses that include the wrong and right guesses: can I automatically create <p> tags with each indexed item in it?

    $("#theseAnswers").html("<ul>" + questions[answerOptIndex].ques + "</ul>");
    


// *** the total number of correct and incorrect guesses

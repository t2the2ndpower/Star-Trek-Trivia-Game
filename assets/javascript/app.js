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





*/


// Variables to be used

var wins;

var losses;

var remainingTime;

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


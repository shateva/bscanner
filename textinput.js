// running list of phrases we want to go thorough
// everything must be lowercase
var phrases2 = ['illegal aliens', 'illegal alien', 'oriental', 'orientals', 'illegals', 'the blacks', 'the asians', 'the whites', 'the latinos']

// phrases is now an object literal (same thing as a dictionary)
// to access a phrase, for example 'illegal aliens', we'd say
// phrases[0].phrase
// to access the explanation, we say phrases[0].explanation
var phrases = [
    {
        id: 0,
        phrase: 'illegal aliens',
        explanation: 'placeholder'
    },
    {
        id: 1,
        phrase: 'illegal alien',
        explanation: 'placeholder'
    },
    {
        id: 2,
        phrase: 'oriental',
        explanation: 'placeholder'
    },
    {
        id: 3,
        phrase: 'orientals',
        explanation: 'placeholder'
    },
    {
        id: 4,
        phrase: 'illegals',
        explanation: 'placeholder'
    },
    {
        id: 5,
        phrase: 'the blacks',
        explanation: 'placeholder'
    },
    {
        id: 6,
        phrase: 'the asians',
        explanation: 'placeholder'
    },
    {
        id: 7,
        phrase: 'the whites',
        explanation: 'placeholder'
    },
    {
        id: 8,
        phrase: 'the latinos',
        explanation: 'placeholder'
    }
];

// global variables that allow us to access contents of
// the textbox and the scan button

const textbox = document.getElementById("txt");
const scanbtn = document.getElementById("scanning");
// allows us to give a pop up message for when nothing's entered in
// the text box
const msg = document.getElementById("msg");

// calls saveText function when you click the scan button
scanning.addEventListener("click", scanText);
var userInput;
var i;
// function that will scan the text
function scanText() {
    // saves variable to userInput
    // everything from the textbox is stored as lowercase 

    userInput = textbox.value.toLowerCase();

    console.log(userInput);
    if (userInput === '') {
        msg.classList.add("error");
        msg.innerHTML = 'Please enter text below';
    }

    // Goes through the scanned text, checks for phrases in scanned text

    for (i = 0; i <= phrases.length; i++) {
        if (userInput.includes(phrases[i].phrase)) {
            alert("Bias Checking Test");
            printLine();
        }
    }

}

//makes highlighting system highlight phrases regardless of capitalization
var options = {
    "caseSensitive": false,
    "accuracy": {
        "value": "exactly"}

}

//prints user input and highlights the found bias phrase
function printLine(){
    document.getElementById("test").innerHTML = userInput;
    var instance = new Mark(document.querySelector("#test"));
    instance.mark(phrases2);
}   

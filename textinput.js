// runnung list of phrases we want to go thorough
// everything must be lowercase
var phrases = ['illegal aliens', 'illegal alien', 'oriental', 'orientals', 'illegals', 'the blacks', 'the asians', 'the whites', 'the latinos']


// global variables that allow us to access contents of
// the textbox and the scan button

const textbox = document.getElementById("txt");
const scanbtn = document.getElementById("scanning");
// allows us to give a pop up message for when nothing's entered in
// the text box
const msg = document.getElementById("msg");

// calls saveText function when you click the scan button
scanning.addEventListener("click", scanText);

// function that will scan the text
function scanText() {
    // saves variable to userInput
    // everything from the textbox is stored as lowercase 

    var userInput = textbox.value.toLowerCase();

    console.log(userInput);
    if (userInput === '') {
        msg.classList.add("error");
        msg.innerHTML = 'Please enter text below';
    }

    // Goes through the scanned text, checks for phrases in scanned text

    for (var i = 0; i <= phrases.length; i++) {
        if (userInput.includes(phrases[i])) {
            alert("Bias Checking Test");
        }
    }
    var instance = new Mark(document.querySelector(".content"));
    instance.mark("i");

}


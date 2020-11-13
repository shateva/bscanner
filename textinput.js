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

// used for making the alerts later
let alert = document.querySelector("#alert");
let alrt = document.createElement('p');

// calls saveText function when you click the scan button
scanning.addEventListener("click", scanText)
var userInput;
var i;
// array for the phrases found in userInput
var phrasesFound = new Array();

// function that will scan the text
function scanText() {
    // removes any alerts that already exist so that
    // alerts aren't repeated
    while (alert.hasChildNodes()) {   
        alert.removeChild(alert.firstChild);
      }
 
    // saves variable to userInput
    // everything from the textbox is stored as lowercase 
    userInput = textbox.value.toLowerCase();

    console.log(userInput);
    if (userInput === '') {
        msg.classList.add("error");
        msg.innerHTML = 'Please enter text below';
    }

    // Goes through the scanned text, checks for phrases in scanned text
    for (i = 0; i < phrases.length; i++) {
        if (userInput.includes(phrases[i].phrase)) {
            //alert("Bias Checking Test");
            // pushes the phrase that was found to the array
            phrasesFound.push(phrases[i].phrase);
            console.log(phrasesFound);
            printLine();     
        }
        else {
            printLine();
        }

    }
    //phrasesFound.reverse();
    console.log(phrasesFound);
    // used for counting the alerts
    var count = 0;
    // double loop goes through phraseFound array to get the matching
    // index in the phrases dictionary
    for (i = 0; i < phrases.length; i++){
        for (j = 0; j < phrases.length; j++) {
            if (phrasesFound[i] === phrases[j].phrase) {
                count++;
                // if there's a match, we add the alert and explanation
                // text to the elements we made earlier in lines 69 & 70
                alrt = document.createElement('p');
                alrt.appendChild(document.createTextNode('Alert ' + count + ' '  + phrases[j].explanation));
                // then we add the text to the elements we made in lines 
                // 67 and 68
                alert.appendChild(alrt);
            }
        }
    }
    // clears phraseFound and userInput
    phrasesFound = new Array();
    userInput = ''; 
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
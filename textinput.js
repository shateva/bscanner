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
        phrase: 'illegal alien',
        explanation: 'placeholder'
    },
    {
        id: 1,
        phrase: 'oriental',
        explanation: 'placeholder'
    },
    {
        id: 2,
        phrase: 'illegals',
        explanation: 'placeholder'
    },
    {
        id: 3,
        phrase: 'the blacks',
        explanation: 'placeholder'
    },
    {
        id: 4,
        phrase: 'the asians',
        explanation: 'placeholder'
    },
    {
        id: 5,
        phrase: 'the whites',
        explanation: 'placeholder'
    },
    {
        id: 6,
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
// temp is the same as userInput, but not lowercase
var temp;
var i;
// array for the phrases found in userInput
var phrasesFound = new Array();

var id_0;
var id_1; 
var id_2; 
var id_3;
var id_4;
var id_5; 
var id_6;



// scrolls the page down, idk how it works
function scroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}


// function that will scan the text
function scanText() {
    // scrolling
    scroll("#scanning", 500);

    // removes any alerts that already exist so that
    // alerts aren't repeated
    while (alert.hasChildNodes()) {   
        alert.removeChild(alert.firstChild);
      }
 
    // saves variable to userInput
    // everything from the textbox is stored as lowercase
    temp = textbox.value;
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
                // we also add 2 line breaks in between the alert
                // and explanation
                alrt = document.createElement('p');
                let linebreak = document.createElement('br');
                let linebreak2 = document.createElement('br');
                alrt.appendChild(document.createTextNode('Biased Phrase Found: ' + phrases[j].phrase));
                alrt.appendChild(linebreak);
                alrt.appendChild(linebreak2);
                alrt.appendChild(document.createTextNode(phrases[j].explanation));
                // then we add the text to the element we made in line 57
                alert.appendChild(alrt);
                
                
            }
        }
    
    }

    //scores nummbers of times word is used in PhrasesFound

    function getOccurrence(array, value) {
            var score = 0;
            array.forEach((v) => (v === value && score++));
            return score;
        }

    id_0 = (getOccurrence(phrasesFound, "illegal alien"))
    id_1 = (getOccurrence(phrasesFound, "oriental"));
    id_2 = (getOccurrence(phrasesFound, "illegals"));  
    id_3 = (getOccurrence(phrasesFound, "the blacks"));
    id_4 = (getOccurrence(phrasesFound, "the asians"));  
    id_5 = (getOccurrence(phrasesFound, "the whites"));
    id_6 = (getOccurrence(phrasesFound, "the latinos"));


    if (count === 0) {
        alrt = document.createElement('p');
        alrt.appendChild(document.createTextNode('We got nothing'));
        alert.appendChild(alrt);
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
    document.getElementById("test").innerHTML = temp;
    var instance = new Mark1(document.querySelector("#test"));
    instance.mark1(phrases2, {accuracy: "partially", separateWordSearch: false,});
}
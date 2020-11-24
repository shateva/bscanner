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
       // score: id_0
    },
    {
        id: 1,
        phrase: 'oriental',
        explanation: 'placeholder'
      //  score: id_1
    },
    {
        id: 2,
        phrase: 'illegals',
        explanation: 'placeholder'
      //  score: id_2
    },
    {
        id: 3,
        phrase: 'the blacks',
        explanation: 'placeholder'
       // score: id_3
    },
    {
        id: 4,
        phrase: 'the asians',
        explanation: 'placeholder'
       // score: id_4
    },
    {
        id: 5,
        phrase: 'the whites',
        explanation: 'placeholder'
      //  score: id_5
    },
    {
        id: 6,
        phrase: 'the latinos',
        explanation: 'placeholder'
      //  score: id_6 
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

// function that will scan the text
function scanText() {
    document.getElementById("userInput-heading2").innerHTML = "Start Scanning...";
    document.getElementById("alert-heading2").innerHTML = "All alerts";
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

    // counts the number of times biased word was used in the userInput
    // saves the number to id_#
    id_0 = (userInput.match(/illegal alien/g) || []).length.toString()
    id_1 = (userInput.match(/oriental/g) || []).length.toString()
    id_2 = (userInput.match(/illegals/g) || []).length.toString()
    id_3 = (userInput.match(/the blacks/g) || []).length.toString()
    id_4 = (userInput.match(/the asians/g) || []).length.toString()
    id_5 = (userInput.match(/the whites/g) || []).length.toString()
    id_6 = (userInput.match(/the latinos/g) || []).length.toString()

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
                let linebreak3 = document.createElement('br');
                alrt.appendChild(document.createTextNode('Biased Phrase Found: ' + phrases[j].phrase));
                alrt.appendChild(linebreak);
                alrt.appendChild(linebreak2);
                alrt.appendChild(document.createTextNode(phrases[j].explanation));
                alrt.appendChild(linebreak3);
                alrt.appendChild(document.createTextNode(phrases[j].score))

                // then we add the text to the element we made in line 57
                alert.appendChild(alrt);
                
                
            }
        }
    
    }

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

//prints user input
function printLine(){
    document.getElementById("test").innerHTML = temp;
}

//highlights the phrase passed in
function highlighter(phraseHold2){
    for (var i = 0; i <= phrasesFound.length; i++){
        //highlights yellow is phrase is used one time
        if (countString(phrasesFound[i]) < 2){
            var instance = new Mark(document.querySelector("#test"));
            instance.mark(phrasesFound[i], {accuracy: "partially", separateWordSearch: false,});
        }else if(countString(phrasesFound[i]) < 4){
            //highlights orange if phrase is used 2-3 times
            var instance = new Mark(document.querySelector("#test"));
            instance.mark(phrasesFound[i], {accuracy: "partially", separateWordSearch: false, className: 'secondary'},);
        }   
    }
}

/*
//one instance
instance.markRegExp(/#test/g, {
  className: "one_instance"
});

//two instances
instance.markRegExp(/#test/g, {
  className: "two_instance"
});


}
*/

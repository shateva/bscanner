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
        explanation: 'This is an offensive term that is used to describe immigrants.'
       // score: id_0
    },
    {
        id: 1,
        phrase: 'oriental',
        explanation: 'This is an offensive term that is used to describe East Asian people.'
      //  score: id_1
    },
    {
        id: 2,
        phrase: 'illegals',
        explanation: 'This is an offensive term that is used to describe immigrants.'
      //  score: id_2
    },
    {
        id: 3,
        phrase: 'the blacks',
        explanation: 'There\'s an "othering" effect made when turning these adjectives into nouns. Does every person who uses these phrases have an inherent racial bias? Not necessarily, but it\'s best to avoid these phrases and instead use "Black people".'
       // score: id_3
    },
    {
        id: 4,
        phrase: 'the asians',
        explanation: 'There\'s an "othering" effect made when turning these adjectives into nouns. Does every person who uses these phrases have an inherent racial bias? Not necessarily, but it\'s best to avoid these phrases and instead use "White people".'
       // score: id_4
    },
    {
        id: 5,
        phrase: 'the whites',
        explanation: 'There\'s an "othering" effect made when turning these adjectives into nouns. Does every person who uses these phrases have an inherent racial bias? Not necessarily, but it\'s best to avoid these phrases and instead use "Latino people".'
      //  score: id_5
    },
    {
        id: 6,
        phrase: 'the latinos',
        explanation: 'There\'s an "othering" effect made when turning these adjectives into nouns. Does every person who uses these phrases have an inherent racial bias? Not necessarily, but it\'s best to avoid these phrases and instead use "The white people" or "The black people".'
      //  score: id_6 
    },
    

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
    
    document.getElementById("circle").style.visibility = "visible";
    document.getElementById("key").style.visibility = "visible";
    document.getElementById("test").style.visibility = "visible";
    document.getElementById("design").style.display = "block";
    document.getElementById("holdStuff").style.display = "block";

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

    if (userInput === '') {
        msg.classList.add("error");
        msg.innerHTML = 'Please enter text below';
    }

    // Goes through the scanned text, checks for phrases in scanned text
    for (var i = 0; i < phrases.length; i++) {
        if (userInput.includes(phrases[i].phrase)) {
            // pushes the phrase that was found to the array
            phrasesFound.push(phrases[i].phrase);
            console.log(phrasesFound);
            //prints number of phrases that were found
            document.getElementById("hide").innerHTML = "["+ phrasesFound.length + "] different phrase(s) have been found <br>\n[" + countAll() + "] phrase(s) in total have been found";
            printLine();   
        }
        else {
            printLine();
          
        }
        document.getElementById("countCircle").innerHTML = countAll();
        highlighter();
    
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
               // alrt.appendChild(document.createTextNode(phrases[j].score))

                // then we add the text to the element we made in line 57
                alert.appendChild(alrt);
                
                
            }
        }
    
    }

    if (count === 0) {
        alrt = document.createElement('p');
        alrt.appendChild(document.createTextNode('There were no biased phrases found in this text, however that does not mean this text does not contain bias. We suggest that you still keep an eye out for any words that suggest bias!'));
        alert.appendChild(alrt);
    }


  document.getElementById("countCircle").innerHTML = countAll();
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

//returns the number of times a phrase occurs in the user's text (takes in a phrase as parameter)
function countString(hold){
    let count = (userInput.match(new RegExp(hold, "gi")) || []).length;
    return count;
    }




//highlights the phrase passed in
function highlighter(){

    if (phrasesFound.length > 0){
        for (var i = 0; i < phrasesFound.length; i++){
            //highlights yellow is phrase is used one time
            if (countString(phrasesFound[i]) < 3){
                var instance = new Mark(document.querySelector("#test"));
                instance.mark(phrasesFound[i], {accuracy: "partially", separateWordSearch: false,});
             }else if(countString(phrasesFound[i]) < 100){
                //highlights orange if phrase is used 2-3 times
                var instance = new Mark(document.querySelector("#test"));
                instance.mark(phrasesFound[i], {accuracy: "partially", separateWordSearch: false, className: 'secondary'},);
            }   
        }
        console.log(phrasesFound[i]);
    }
}

function countAll(){
    let sum = 0;
    for (var i = 0; i < phrasesFound.length; i++){
         sum += countString(phrasesFound[i]);
    }
    console.log(sum);
    return sum;
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
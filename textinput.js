// global variables that allow us to access contents of
// the textbox and the scan button
const textbox = document.getElementById("txt");
const scanbtn = document.getElementById("scanning");

// calls saveText function when you click the scan button
scanbtn.addEventListener("click", scanText);

// function that will scan the text
function scanText(){
    var userInput = textbox.value;    
    console.log(userInput);
    
    
}

saveText();
// global variables that allow us to access contents of
// the textbox and the scan button
const textbox = document.getElementById("txt");
const scanbtn = document.getElementById("scanning");
// allows us to give a pop up message for when nothing's entered in
// the text box
const msg = document.getElementById("msg");

// calls saveText function when you click the scan button
scanbtn.addEventListener("click", scanText);

// function that will scan the text
function scanText(){
    // saves variable to userInput
    var userInput = textbox.value;    
    console.log(userInput);
    // if the userInput is blank, give an error message
    if (userInput === '') {
        msg.classList.add("error");
        msg.innerHTML = 'Please enter text below';
        setTimeout(() => msg.remove(), 2000);
    }
    
}


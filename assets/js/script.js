//Wait for the DOM to finish loading before running the game.
// Get the button elements and add event listeners to them.

//This will wait for the DOM to be loaded and then execute the function.
document.addEventListener('DOMContentLoaded', function() {
    //This returns all the elements called button and renames them buttons
    let buttons = document.getElementsByTagName('button');
    //Goes through the buttons array & returns each element in the array, which will be stored in that variable button on each iteration
    for(let button of buttons) {

        //button here represents an individual button element - the listener listens for that button to be clicked - when clicked
        //the code inside this code block will run.
        button.addEventListener('click', function() {

           // Checks the type of the attribute to see what it's value is
            // this. refers to the button that was just clicked
            if(this.getAttribute('data-type')==='submit'){
                // We then use the reference to the button to get it's data type.
                //If it is submit we display to say - you clicked submit
                alert('You clicked Submit!');
            } else {
               //otherwise we set the value to the game type to the value of that attribute to tell us what game type we want to run.
               let gameType = this.getAttribute("data-type");
                runGame(gameType);
                }
        })
    }
    runGame("addition");
})
// this is a docstring - when the function is called you can hover over the call to get a description of the
//function without having to scroll back to find the function.

/**The main game 'loop, called when the script is first loaded
 * *and after the user's answer has been processed.
 */
//Pass the gameType into the function as an argument
function runGame(gameType) {
// Creates two random numbers beteen 1 and 25 (floor =round to whole number and plus one so that zero does not appear)
let num1= Math.floor(Math.random() *25)+1;
let num2= Math.floor(Math.random() *25)+1;

//if the gameType is equal to addition then display our addition question
if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
} else {
    // if an error occurs it will alert the user
    alert(`Unknown game type: ${gameType}`);
    // throw will stop the game running and console.log this message
    throw `Unknown game type: ${gameType}.Aborting!`;
}
}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}
//The two arguments the function will accept are operand 1 and 2
function displayAdditionQuestion(operand1, operand2) {
    //Get the element that has the Id of operand1 & 2and set the text content to our number
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    //Get the element that has the Id of operator and set to plus sign
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}


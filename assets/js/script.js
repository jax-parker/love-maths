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
                alert(`You clicked ${gameType}`);
                }
        })
    }

})



function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}


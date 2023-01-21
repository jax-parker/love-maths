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
                checkAnswer();
            } else {
               //otherwise we set the value to the game type to the value of that attribute to tell us what game type we want to run.
               let gameType = this.getAttribute("data-type");
                runGame(gameType);
                }
        });
    }
    //This will allow the user to use Enter key to submit thier answer.
    //Reference the id of the place where you want to 'listen. Add an Event Listener to it. 
    // Add what you're listening for - in this case key down (a key press). 
    //Then check the property of that object event(key preperty) to see if enter was pressed. If it was
    
    document.getElementById("answer-box").addEventListener("keydown", function(event){
        //Then call a function sending in an event object. If the key pressed was Enter then
        if (event.key === "Enter") {
        // call our check answer function. Then check the answer.
            checkAnswer();
        }
    })


    runGame("addition");
});
// this is a docstring - when the function is called you can hover over the call to get a description of the
//function without having to scroll back to find the function.

/**The main game 'loop, called when the script is first loaded
 * *and after the user's answer has been processed.
 */
//Pass the gameType into the function as an argument
function runGame(gameType) {
   
    //Each time our run game function is called it will set the value of our answer box to an empty string
    //and empty it of what ever was there before.
document.getElementById("answer-box").value = "";

//'Setting the focus' This puts the cursor back in the box after you submit your answer
//So whichever Id you use, that is where the cursor will be after submit.
document.getElementById("answer-box").focus();

// Creates two random numbers beteen 1 and 25 (floor =round to whole number and plus one so that zero does not appear)
let num1= Math.floor(Math.random() *25)+1;
let num2= Math.floor(Math.random() *25)+1;

//if the gameType is equal to addition (taken from button data type) then display our addition question
if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
    //else if the gameType is equal to multiply(taken from button data type) then display our addition question
} else if (gameType==="multiply") {
    displayMultiplyQuestion(num1, num2);
} else if (gameType === "subtract") {
    displaySubtractQuestion(num1, num2);
}else {
    // if an error occurs it will alert the user
    alert(`Unknown game type: ${gameType}`);
    // throw will stop the game running and console.log this message
    throw `Unknown game type: ${gameType}.Aborting!`;
}
}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    //We need to read the answer the user inputs into this box via its Id,
    //as a whole integer and because it's an input element number we use .value

    let userAnswer = parseInt(document.getElementById("answer-box").value);

    //This will retrieve our correct answer from our calculateCorrectAnswer function
    let calculatedAnswer = calculateCorrectAnswer();

    //You now need to compare the users answer to the correct answer by using a variable to check if the users answer
    //matches the correct answer
    let isCorrect = userAnswer === calculatedAnswer[0];

    // so if isCorrect is true we need to congrat the user for getting it right:
    //This is a short way of saying if isCorrect = to true.
    if (isCorrect) {
        alert("Hey! You got it right! :D");
        //Calls your increment score function - hover over to see.
        incrementScore();
    // If incorrect use template literals to tell them what they entered and what is correct pulling the 1st value out of our
    //correct calculated correct answer array.
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        //Calls your increment wrong answer function - hover over to see.
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}
/**
 * Gets the operands (the numbers) and the operater(plus, minus etc) 
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
//Get the value of the element with the Id of operand1 from our HTML using the innerText
    // parseInt makes sure we treat it as a whole number as by default JS returns as a string from the Dom
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    // this parts checks if the operator is a plus sign, if correct it will calculate the correct answer
    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    //this will check if the operator is a x sign, if it is it will calculate the correct answer
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
        //this will check if the operator is a - sign, if it is it will calculate the correct answer
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    
    // this part will show the user an error message if not and console log an error message
    } else {
    alert(`Unimplemented operator ${operator}`);
    throw `Unimplemented operator ${operator}. Aborting!`;
}
}

/**
 * Gets the current score from the Dom and increments it by 1
 */
function incrementScore() {
    //Retrieve the score from the Dom with the Id of score and assign it to a new variable oldScore
    let oldScore = parseInt(document.getElementById("score").innerText);
    //Write it back to the Dom after you've incremented (++) by one
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the tally of incorrect answers from the Dom and increments it by 1
 */
function incrementWrongAnswer() {

    //Retrieve the score from the Dom with the Id of incorrect and assign it to a new variable 
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    //Write it back to the Dom after you've incremented (++) by one
    document.getElementById("incorrect").innerText = ++oldScore;

}
//The two arguments the function will accept are operand 1 and 2
function displayAdditionQuestion(operand1, operand2) {

    //Get the element that has the Id of operand1 & 2 and set the text content to our number
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    //Get the element that has the Id of operator and set to plus sign
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
     //Get the element that has the Id of operand1 & 2 and set the text content to our number
     //This is a ternary operator which checks if the first number is larger than the second.
     //The condition you want to check goes before the ? Which is bigger op1 or op2?
     //If op1 is bigger return that - if op2 is bigger return that (colon stands for else).
     document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;

     // Condition remains the same as we want the first number bigger so we don't return a minus answer.
     document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;

     //Get the element that has the Id of operator and set to minus sign
     document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
     //Get the element that has the Id of operand1 & 2 and set the text content to our number
     document.getElementById('operand1').textContent = operand1;
     document.getElementById('operand2').textContent = operand2;
     //Get the element that has the Id of operator and set to multiply sign
     document.getElementById('operator').textContent = "x";
}

function displayDivisionQuestion() {

}


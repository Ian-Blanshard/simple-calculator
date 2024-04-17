//wait for the DOM to finish loading 
document.addEventListener('DOMContentLoaded', function() {
    //get all button elements and assign them to the array buttons
    let buttons = document.getElementsByTagName('button');
    //loop through the buttons array
    for (let button of buttons) {
        button.addEventListener('click', function() {
            //check if button was submit button
            if (this.getAttribute('data-type') === 'submit') {
            //if button == submit add the following alert    
                alert('You clicked Submit!');
            } else {
            // != submit game type is set to the correct value for the button pressed
                let gameType = this.getAttribute('data-type');
                runGame(gameType);

            }
        });
    }

    runGame('addition');
})

//functions

/**
 * The main game loop, called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    //create two random numbers between 1 and 25 and assign them to variables
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unkown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
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


function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}


function displaySubtractQuestion() {

}


function DisplayMultiplyQuestion() {

}


function DisplayDivisionQuestion() {

}

//event listeners
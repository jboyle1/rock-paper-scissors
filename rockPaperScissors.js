// User choice function

// 001 - Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.
const getUserChoice = (userInput) => {
// 002 - Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.
userInput = userInput.toLowerCase();
// 003 - Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'. If it does, then return the userInput. If not, use console.log to print an error message to the console.
if (userInput === 'rock' || userInput ==='scissors' || userInput === 'paper') {
    return userInput;
} else {
    consol.log("error! Please enter either 'rock', 'paper or 'scissors'.");
}
};

// Computer choice function

// 004 - Create a new function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

// Determine a winner function

// 005 - Create a function named determineWinner that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied. Let’s deal with the tie condition first. Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, return a string that the game was a tie.
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    }
// 006 - Begin by writing an if statement that checks if the userChoice is 'rock'. Inside the if statement’s block, write another if/else statement. The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won. If not, return a message that the user won.
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }
// 007 - Next, write another if statement for if the userChoice is 'paper'. Inside this if statement, the computerChoice must be either 'scissors' or 'rock'. Write logic that will return a winner.
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }
// 008 - Next, write yet another if statement for if the userChoice is 'scissors'. Inside of this if statement, the computerChoice must either be 'rock' or 'paper'. Write logic that will return a winner.
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }
};

// 009 - Test in console
// console.log(determineWinner('rock', 'scissors'));
// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('rock', 'rock'));

// Function to play the game

// 010 - Create a function named playGame. Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument. Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().
const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`You thew ${userChoice} and the computer threw ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));

};

// 011 - Call playGame function
playGame()



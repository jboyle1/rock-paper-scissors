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
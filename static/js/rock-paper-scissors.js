// User Choice Function

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput ==='scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput;
    } else {
        return "error! Please enter either 'rock', 'paper or 'scissors'.";
    }
    };

    // Computer Choice Function

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

    // Determine a Winner Function

    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return 'This game is a tie!';
        }
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'Sorry, computer won!';
            } else {
                return 'Congratulations, you won!';
            }
        }
        if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'Sorry, computer won!';
            } else {
                return 'Congratulations, you won!';
            }
        }
        if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'Sorry, computer won!';
            } else {
                return 'Congratulations, you won!';
            }
        }
        if (userChoice === 'bomb') {
            return 'Congratulations, you won!';
        }
    };

    // Function to Play the Game

    const playGame = () => {
        const userChoice = getUserChoice(document.getElementById('input').value)
        const computerChoice = getComputerChoice();
        let finalString = (`You thew ${userChoice} and the computer threw ${computerChoice}`);
        document.getElementById('winner').innerHTML = finalString;
        let winner = determineWinner(userChoice, computerChoice);
        document.getElementById('winner2').innerHTML = winner;

    };

    document.getElementById('submit').addEventListener('click', playGame);
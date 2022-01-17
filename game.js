
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('results')
const gameGrid = document.getElementById('gamer')

const choices = ["Rock", "Paper", "Scissors"];
let userChoice;
let compuChoice;
let result;

let userScore = 0;
let compuScore = 0;

const btnClick = (e) => {
	userChoice = e.target.id;
	userChoiceDisplay.innerHTML = userChoice;
	generateComputerChoice();
	getResults();
};

function generateComputerChoice() {
	const randomChoice = choices[Math.floor(Math.random() * choices.length)];
	compuChoice = randomChoice;
	computerChoiceDisplay.innerHTML = compuChoice
}

for (let i = 0; i < choices.length; i++) {
	const btn = document.createElement('button')
	btn.id = choices[i];
	btn.innerHTML = choices[i];
	btn.addEventListener('click', btnClick);
	gameGrid.appendChild(btn)
}

const getResults = () => {
	switch (userChoice + compuChoice) {
		case "ScissorsPaper":
		case "PaperRock":
		case "RockScissors":
		   resultDisplay.innerHTML = "YOU WIN!";
		   userScore += 1;
		   break;
		case "PaperScissors":
		case "RockPaper":
		case "ScissorsRock":
		   resultDisplay.innerHTML = "YOU LOSE!";
		   compuScore += 1;
		   break;
		case "RockRock":
		case "PaperPaper":
		case "ScissorsScissors":
		   resultDisplay.innerHTML = "IT A DRAW!";   
	}
}

function youWin (userChoice, compuChoice) {
	userScore++;
	userChoice.innerHTML = userScore;
	compuChoice.innerHTML = compuScore;

	if (userScore < 5){resultDisplay.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compuChoice)}. YOU WIN! =D`;
} else if (userScore === 5){resultDisplay.innerHTML = 'Game over, YOU WIN! Refresh to play again'};
}

function youLose (userChoice, compuChoice) {
	compuScore++;
	userChoice.innerHTML = userScore;
	compuChoice.innerHTML = compuScore;

	if (compuScore < 5){resultDisplay.innerHTML = `${convertToWord(compuChoice)} beats ${convertToWord(userChoice)}. YOU LOSE! =`;
} else if (compuScore === 5){resultDisplay.innerHTML ='Game over, YOU LOSE! Refresh to play again'};
}

function drawGame (userChoice, compuChoice) {
	userChoice.innerHTML = userScore;
	compuChoice.innerHTML = compuScore;
	resultDisplay.innerHTML = "ITS A DRAW!";
}



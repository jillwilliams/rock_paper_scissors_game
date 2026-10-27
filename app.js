const rockImageEl = document.getElementById("rock-img");
const paperImageEl = document.getElementById("paper-img");
const scissorsImageEl = document.getElementById("scissors-img");
const computerChoiceImageEl = document.getElementById("computer-choice-image");
const resultsDivEl = document.getElementById("results");
const resultWinsEl = document.getElementById("wins");
const resultLossesEl = document.getElementById("losses");
const resultTiesEl = document.getElementById("ties");
const playAgainButtonEl = document.getElementById("play-again-button");
const quitButtonEl = document.getElementById("quit-button");


let wins = 0;
let losses = 0;
let ties = 0;

const choices = ["images/rock.jpg", "images/paper.jpg", "images/scissors.jpg"];
const randomIndex = Math.round(Math.random() * 2);
const computerChoice = choices[randomIndex];


const playRocks = () => {
    const playersChoice = choices[0];
    computerChoiceImageEl.innerText = computerChoice
    if (computerChoice === choices[0]) {
        resultsDivEl.innerText = "It's a tie!"
        const tiedScore = ties++
        resultTiesEl.innerText = `${tiedScore + 1}`
    } else if (computerChoice === choices[1]) {
        resultsDivEl.innerText = "Computer Wins!"
        const lossesScore = losses++
        resultLossesEl.innerText = `${lossesScore + 1}`
    } else if (computerChoice === choices[2]) {
        resultsDivEl.innerText = "You Win!"
        const winScore = wins++
        resultWinsEl.innerText = `${winScore + 1}`
    }
}

const playPaper = () => {
    const playersChoice = choices[1];
    computerChoiceImageEl.innerText = computerChoice
    if (computerChoice === choices[1]) {
        resultsDivEl.innerText = "It's a tie!"
        const tiedScore = ties++
        resultTiesEl.innerText = `${tiedScore + 1}`
    } else if (computerChoice === choices[0]) {
        resultsDivEl.innerText = "You Win!"
        const winsScore = wins++
        resultWinsEl.innerText = `${winsScore + 1}`
    } else if (computerChoice === choices[2]) {
        resultsDivEl.innerText = "Computer Wins!"
        const lossesScore = losses++
        resultLossesEl.innerText = `${lossesScore + 1}`
    }
}

const playScissors = () => {
    const playersChoice = choices[2];
    computerChoiceImageEl.innerText = computerChoice
    if (computerChoice === choices[2]) {
        resultsDivEl.innerText = "It's a tie!"
        const tiedScore = ties++
        resultTiesEl.innerText = `${tiedScore + 1}`
    } else if (computerChoice === choices[0]) {
        resultsDivEl.innerText = "Computer Wins!"
        const lossesScore = losses++
        resultLossesEl.innerText = `${lossesScore + 1}`
    } else if (computerChoice === choices[1]) {
        resultsDivEl.innerText = "You Win!"
        const winsScore = wins++
        resultWinsEl.innerText = `${winsScore + 1}`
    }
}



rockImageEl.addEventListener("click", playRocks);
paperImageEl.addEventListener("click", playPaper);
scissorsImageEl.addEventListener("click", playScissors);
playAgainButtonEl.addEventListener("click", playAgain);
quitButtonEl.addEventListener("click", quitGame);


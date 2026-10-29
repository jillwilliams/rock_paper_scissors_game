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
    // const playersChoice = choices[0];
    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex];

    const imgString = `<img src="${computerChoice}" />`
    computerChoiceImageEl.innerHTML = imgString;
    
    const hideImages = () => {
        paperImageEl.classList.add("hidden");
        scissorsImageEl.classList.add("hidden");
    }
    hideImages();
    
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
    
    rockImageEl.removeEventListener("click", playRocks);
    paperImageEl.removeEventListener("click", playPaper);
    scissorsImageEl.removeEventListener("click", playScissors);

    

}


const playPaper = () => {
    // const playersChoice = choices[1];

    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex];

    const imgString = `<img src="${computerChoice}" />`
    computerChoiceImageEl.innerHTML = imgString;

    const hideImages = () => {
        rockImageEl.classList.add("hidden");
        scissorsImageEl.classList.add("hidden");
    }
    hideImages();


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
    rockImageEl.removeEventListener("click", playRocks);
    paperImageEl.removeEventListener("click", playPaper);
    scissorsImageEl.removeEventListener("click", playScissors);
}


const playScissors = () => {
    // const playersChoice = choices[2];
    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex];

    const imgString = `<img src="${computerChoice}" />`
    computerChoiceImageEl.innerHTML = imgString;

    const hideImages = () => {
        rockImageEl.classList.add("hidden");
        paperImageEl.classList.add("hidden");
    }
    hideImages();


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
    rockImageEl.removeEventListener("click", playRocks);
    paperImageEl.removeEventListener("click", playPaper);
    scissorsImageEl.removeEventListener("click", playScissors);
}

const playAgain = () => {
    computerChoiceImageEl.innerHTML = "";
    resultsDivEl.innerText = ""; 

    const showImages = () => {
        rockImageEl.classList.remove("hidden"
        );
        paperImageEl.classList.remove("hidden");
        scissorsImageEl.classList.remove("hidden");

    }
    showImages();
    // 2. Remove old listeners to prevent stacking
    rockImageEl.removeEventListener("click", playRocks);
    paperImageEl.removeEventListener("click", playPaper);
    scissorsImageEl.removeEventListener("click", playScissors);

    // 3. Add fresh event listeners
    rockImageEl.addEventListener("click", playRocks);
    paperImageEl.addEventListener("click", playPaper);
    scissorsImageEl.addEventListener("click", playScissors);
}


const quitGame = () => {
    computerChoiceImageEl.innerHTML = " ";
    resultsDivEl.innerText = "Thanks for playing!";
    
    rockImageEl.removeEventListener("click", playRocks);
    paperImageEl.removeEventListener("click", playPaper);
    scissorsImageEl.removeEventListener("click", playScissors);
}

rockImageEl.addEventListener("click", playRocks);
paperImageEl.addEventListener("click", playPaper);
scissorsImageEl.addEventListener("click", playScissors);
playAgainButtonEl.addEventListener("click", playAgain);
quitButtonEl.addEventListener("click", quitGame);


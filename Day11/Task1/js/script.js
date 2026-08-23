var PlayerOneChoice = "Rock";
var PlayerTwoChoice = "Scissors";

if (
    (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors") ||
    (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") ||
    (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Paper")
) {
    console.log("Player One Wins!");
}
else if (
    (PlayerTwoChoice === "Rock" && PlayerOneChoice === "Scissors") ||
    (PlayerTwoChoice === "Paper" && PlayerOneChoice === "Rock") ||
    (PlayerTwoChoice === "Scissors" && PlayerOneChoice === "Paper")
) {
    console.log("Player Two Wins!");
}
else if (PlayerOneChoice === PlayerTwoChoice) {
    console.log("It's a Tie!");
}
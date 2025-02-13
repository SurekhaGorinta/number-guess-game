// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    let message = "";

    for (let i = 1; i <= attempts; i++) {
        switch (true) {
            case guess === randomNumber:
                message = "🎉 Congratulations! You guessed it right!";
                document.getElementById("message").style.color = "green";
                break;
            case guess < randomNumber:
                message = "📉 Too low! Try again.";
                break;
            case guess > randomNumber:
                message = "📈 Too high! Try again.";
                break;
            default:
                message = "⚠️ Please enter a valid number!";
        }

        document.getElementById("message").innerText = message;

        if (guess === randomNumber) break; // Exit the loop if guessed correctly
    }
}

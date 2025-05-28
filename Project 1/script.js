document.addEventListener("DOMContentLoaded", function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const maxAttempts = 7; // Bonus challenge: Set a guess limit

    const guessInput = document.getElementById("guessInput");
    const submitButton = document.getElementById("submitGuess");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const attemptsLeft = document.getElementById("attemptsLeft");

    function validateGuess(guess) {
        if (isNaN(guess) || guess < 1 || guess > 100) {
            showErrorMessage("⚠ Please enter a valid number between 1 and 100.");
            return false;
        }
        return true;
    }

    function showErrorMessage(message) {
        feedbackMessage.innerText = message;
        feedbackMessage.style.color = "#ff4d4d"; // Red for errors
        feedbackMessage.classList.add("feedback-show");
    }

    function showSuccessMessage(message) {
        feedbackMessage.innerText = message;
        feedbackMessage.style.color = "#32CD32"; // Green for success
        feedbackMessage.classList.add("feedback-show");
    }

    submitButton.addEventListener("click", function() {
        const userGuess = parseInt(guessInput.value.trim(), 10);
        if (!validateGuess(userGuess)) return;

        attempts++;

        if (userGuess === randomNumber) {
            showSuccessMessage(`🎉 Correct! You guessed the number in ${attempts} attempts!`);
            submitButton.disabled = true; // Disable guessing after success
        } else if (attempts >= maxAttempts) {
            showErrorMessage(`🚨 Game Over! The correct number was ${randomNumber}.`);
            submitButton.disabled = true;
        } else {
            showErrorMessage(userGuess > randomNumber ? "📉 Too high! Guess lower." : "📈 Too low! Guess higher.");
        }

        attemptsLeft.innerText = `Attempts left: ${maxAttempts - attempts}`;
    });
});

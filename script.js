// Function to hide all sections and show only the selected one
function showScreen(screenId) {
    document.querySelectorAll(".home, .password, .trivia-intro, .trivia, .score-page, .wish-page").forEach(div => {
        div.style.display = "none";
    });

    document.getElementById(screenId).style.display = "flex";
}

// Set up visibility rules when the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Hide all screens except the homepage
    showScreen("home");

    // Attach event listener to play button to show the password screen
    document.querySelector(".play-btn").addEventListener("click", function () {
        showScreen("password");
    });
});

document.getElementById("submit-pass").addEventListener("click", function() {
    const passwordField = document.getElementById("passwordInput");
    const password = passwordField.value;

    if (password === "pastel") {
        // Redirect to the next page
        showScreen("trivia-intro"); 
    } else {
        // Clear input field if incorrect
        passwordField.value = "";
    }
});

// Prevent "Enter" from submitting the password
document.getElementById("submit-pass").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
    }
});
// ===================================
// FOREST RPG
// game.js
// ===================================


// Wait until the page loads
window.onload = function () {

    const loadingScreen =
        document.getElementById("loadingScreen");

    const startScreen =
        document.getElementById("startScreen");


    // Show loading screen for 1 second
    setTimeout(function () {

        loadingScreen.classList.add("hidden");

        startScreen.classList.remove("hidden");

    }, 1000);


    // Start Game button
    document
        .getElementById("startGameButton")
        .addEventListener("click", startGame);

};


// ===================================
// Start Game
// ===================================

function startGame() {

    let playerName =
        document
            .getElementById("playerName")
            .value
            .trim();


    // Give the player a default name
    // if they leave it blank
    if (playerName === "") {

        playerName = "Knight";

    }


    // Update the player's name
    document
        .getElementById("displayName")
        .textContent = playerName;


   document
    .getElementById("welcomeMessage")
    .textContent =
    "Welcome, " + playerName;


    // Hide character creation
    document
        .getElementById("startScreen")
        .classList.add("hidden");


    // Show home screen
    document
        .getElementById("homeScreen")
        .classList.remove("hidden");

}

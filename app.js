const moonPhases = ["New Moon", "Waning Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Third Quarter", "Waning Crescent"];
let currentPlayer = 1;
let playerHand = { 1: [], 2: [] };
let grid = Array(4).fill(null).map(() => Array(4).fill(null)); // 4x4 empty grid

// Initialize game
function startGame() {
    drawCards(1); // Draw initial cards for Player 1
    drawCards(2); // Draw initial cards for Player 2
    currentPlayer = 1; // Ensure it's Player 1's turn at the start
    displayPlayerHand(currentPlayer); // Display Player 1's hand
    displayBoard(); // Display the board
    updateTurnIndicator(); // Show Player 1's turn
}

// Draw 3 cards for the player
function drawCards(player) {
    while (playerHand[player].length < 3) { // Ensure player always has 3 cards
        const randomPhase = moonPhases[Math.floor(Math.random() * moonPhases.length)];
        playerHand[player].push(randomPhase);
    }
    displayPlayerHand(player);
}

let selectedCardIndex = null; // Store the index of the selected card

// Display the player’s hand
function displayPlayerHand(player) {
    const handContainer = document.getElementById('player-hand');
    handContainer.innerHTML = playerHand[player].map((phase, index) => {
        const selectedClass = index === selectedCardIndex ? 'selected' : ''; // Highlight selected card
        return `<div class="card ${selectedClass}" data-index="${index}" onclick="selectCard(${index})">${phase}</div>`;
    }).join('');
}

// Select a card from Player's hand
function selectCard(index) {
    selectedCardIndex = index; // Set the selected card index
    displayPlayerHand(currentPlayer); // Refresh hand to show selected card
}



// Dynamically display the board with clickable cells
function displayBoard() {
    const boardContainer = document.getElementById('board');
    boardContainer.innerHTML = ''; // Clear previous board
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement('div');
            cell.classList.add('card');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.onclick = () => placeCardInCell(i, j); // Make cells clickable
            if (grid[i][j]) {
                cell.textContent = grid[i][j].phase;
            }
            boardContainer.appendChild(cell);
        }
    }
}

// Place card in chosen cell on the board
function placeCardInCell(row, col) {
    if (selectedCardIndex !== null && !grid[row][col]) { // Ensure a card is selected and the cell is empty
        const card = playerHand[currentPlayer][selectedCardIndex]; // Get the selected card
        grid[row][col] = { player: currentPlayer, phase: card }; // Place the card on the grid
        
        // Remove the selected card from the hand
        playerHand[currentPlayer].splice(selectedCardIndex, 1); // Use splice correctly to only remove the selected card
        
        selectedCardIndex = null; // Reset the selected card
        displayBoard(); // Refresh the board
        displayPlayerHand(currentPlayer); // Refresh the hand
        endTurn(); // End turn and switch player
    }
}




// End turn and switch player
function endTurn() {
    currentPlayer = currentPlayer === 1 ? 2 : 1; // Switch between Player 1 and Player 2
    selectedCardIndex = null; // Reset selected card
    drawCards(currentPlayer); // Refill the player's hand // TODO limit
    displayBoard();
    displayPlayerHand(currentPlayer);
    updateTurnIndicator(); // Update whose turn it is
}


function updateTurnIndicator() {
    const turnIndicator = document.getElementById('turn-indicator');
    turnIndicator.textContent = `Player ${currentPlayer}'s turn`;
}


// Initialize the grid layout
function initGrid(rows, cols) {
    grid = Array(rows).fill(null).map(() => Array(cols).fill(null));
}

// Start the game
startGame();

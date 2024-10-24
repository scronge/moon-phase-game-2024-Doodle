const moonPhases = ["New Moon", "Waning Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Third Quarter", "Waning Crescent"];
let currentPlayer = 1;
let playerHand = { 1: [], 2: [] };
let grid = Array(4).fill(null).map(() => Array(4).fill(null)); // 4x4 empty grid

// Initialize game
function startGame() {
    initGrid(4, 4); // Initialize the grid before anything
    displayBoard();  // Make sure the board displays at start
    drawCards(1);    // Draw initial cards for Player 1
    drawCards(2);    // Draw initial cards for Player 2
}

// Draw 3 cards for the player
function drawCards(player) {
    while (playerHand[player].length < 3) {
        const randomPhase = moonPhases[Math.floor(Math.random() * moonPhases.length)];
        playerHand[player].push(randomPhase);
    }
    displayPlayerHand(player);
}

// Display the player’s hand
function displayPlayerHand(player) {
    const handContainer = document.getElementById('player-hand');
    handContainer.innerHTML = playerHand[player].map((phase, index) => `<div class="card" data-index="${index}" onclick="placeCard(${player}, ${index})">${phase}</div>`).join('');
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
    if (!grid[row][col]) { // Only place if the cell is empty
        const card = playerHand[currentPlayer].pop(); // Take card from hand
        grid[row][col] = { player: currentPlayer, phase: card };
        displayBoard();
        endTurn();
    }
}

// End turn and switch player
function endTurn() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    drawCards(currentPlayer);
}

// Initialize the grid layout
function initGrid(rows, cols) {
    grid = Array(rows).fill(null).map(() => Array(cols).fill(null));
}

// Start the game
startGame();

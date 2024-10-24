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

const phaseMap = {
    "New Moon": 0,
    "Waxing Crescent": 1,
    "First Quarter": 2,
    "Waxing Gibbous": 3,
    "Full Moon": 4,
    "Waning Gibbous": 5,
    "Third Quarter": 6,
    "Waning Crescent": 7
};


// Display the player’s hand
function displayPlayerHand(player) {
    const handContainer = document.getElementById('player-hand');
    handContainer.innerHTML = playerHand[player].map((phase, index) => {
        const phaseNumber = phaseMap[phase]; // Get the number from the phase name
        const phaseImage = `assets/${phaseNumber}_phase.svg`; // Use the number to reference the SVG
        const selectedClass = index === selectedCardIndex ? 'selected' : ''; // Highlight selected card
        return `<div class="card ${selectedClass}" data-index="${index}" onclick="selectCard(${index})">
                    <img src="${phaseImage}" alt="Moon phase ${phase}" class="phase-image">
                </div>`;
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
            if (grid[i][j]) {
                const phase = grid[i][j].phase;
                const phaseNumber = phaseMap[phase]; // Get the number from the phase name
                const phaseImage = `assets/${phaseNumber}_phase.svg`; // Use the number to reference the SVG
                cell.innerHTML = `<img src="${phaseImage}" alt="Moon phase ${phase}" class="phase-image">`;
            }
            cell.onclick = () => placeCardInCell(i, j); // Make cells clickable
            boardContainer.appendChild(cell);
        }
    }
}

// Place card in chosen cell on the board
function placeCardInCell(row, col) {
    if (selectedCardIndex !== null && !grid[row][col]) { // Ensure a card is selected and the cell is empty
        const card = playerHand[currentPlayer][selectedCardIndex]; // Get the selected card
        grid[row][col] = { player: currentPlayer, phase: card }; // Place the card in the grid

        playerHand[currentPlayer].splice(selectedCardIndex, 1); // Remove the selected card from the hand
        selectedCardIndex = null; // Reset the selected card
        displayBoard(); // Refresh the board
        displayPlayerHand(currentPlayer); // Update hand

        checkScoring(currentPlayer, row, col); // Check scoring
        endTurn(); // Automatically switch turns after scoring
    }
}


// Function to check for scoring based on adjacency
function checkScoring(player, row, col) {
    const currentCard = grid[row][col];
    const adjacentPositions = getAdjacentPositions(row, col);
    
    let points = 0;
    
    adjacentPositions.forEach(([adjRow, adjCol]) => {
        const adjacentCard = grid[adjRow][adjCol];
        if (adjacentCard && adjacentCard.phase === currentCard.phase) {
            points += 1; // Phase pair: same moon phase
        }
        
        // Full moon pair: 4 phases apart
        if (adjacentCard && Math.abs(adjacentCard.phase - currentCard.phase) === 4) {
            points += 2;
        }
    });
    
    playerScores[player] += points; // Add points to player’s score
    displayScores();
}

// Get adjacent positions (up, down, left, right)
function getAdjacentPositions(row, col) {
    const positions = [];
    if (row > 0) positions.push([row - 1, col]); // Up
    if (row < grid.length - 1) positions.push([row + 1, col]); // Down
    if (col > 0) positions.push([row, col - 1]); // Left
    if (col < grid[0].length - 1) positions.push([row, col + 1]); // Right
    return positions;
}

function displayScores() {
    document.getElementById('player-1-score').textContent = `Player 1: Score: ${playerScores[1]}`;
    document.getElementById('player-2-score').textContent = `Player 2: Score: ${playerScores[2]}`;
}


// End turn and switch player
function endTurn() {
    currentPlayer = currentPlayer === 1 ? 2 : 1; // Switch between Player 1 and Player 2
    selectedCardIndex = null; // Reset selected card for the new player
    drawCards(currentPlayer); // Ensure the new player has 3 cards
    displayBoard(); // Refresh the board
    displayPlayerHand(currentPlayer); // Show the current player's hand
    updateTurnIndicator(); // Indicate the new player's turn
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

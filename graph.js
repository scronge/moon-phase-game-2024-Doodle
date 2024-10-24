let grid = []; // 2D array representing the grid board

// Initialize a grid layout (for now, 4x4)
function initGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < cols; j++) {
            grid[i][j] = null;
        }
    }
}

// Check adjacency (for grid, could extend to graphs)
function checkAdjacent(row, col) {
    let adjacent = [];
    if (row > 0) adjacent.push(grid[row - 1][col]); // Check above
    if (row < grid.length - 1) adjacent.push(grid[row + 1][col]); // Check below
    if (col > 0) adjacent.push(grid[row][col - 1]); // Check left
    if (col < grid[row].length - 1) adjacent.push(grid[row][col + 1]); // Check right
    return adjacent;
}

initGrid(4, 4);

/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function (grid) {
    let result = 0
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] == 1) {
                result = Math.max(result, dfs(grid, y, x))
            }
        }
    }
    // return `Largest island is ${result} blocks`
    return result
};

const dfs = (grid, y, x) => {
    // displayGrid(grid) // debug
    if (y < 0 || y > grid.length-1 || x < 0 || x > grid[0].length || !grid[y][x]) return 0 // short circuit; there's no land this way
    grid[y][x] = 0
    return 1 + dfs(grid, y - 1, x) + dfs(grid, y + 1, x) + dfs(grid, y, x - 1) + dfs(grid, y, x + 1)
}

const checkValid = (grid, y, x) => {
    // check that new location is in bounds and color is the one we're trying to match
    if (y >= 0 && y < grid.length && x >= 0 && x < grid[0].length && grid[y][x] === 1) {
        return true
    }
    return false
}

const displayGrid = (grid) => {
    for (let row = 0; row < grid.length; row++) {
        console.log(grid[row])
    }
    console.log('--------------------------');
}

const grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
console.log(maxAreaOfIsland(grid));
/**
 * @param {number[][]} grid
 * @return {number}
 */

// brute force edition
var islandPerimeter = function (grid) {
    let result = 0
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            // console.log(x, y, grid[y][x]); // debug
            if (grid[y][x] === 1) {
                let neighbours = 0
                if (x-1 >= 0 && x-1 < grid[0].length && grid[y][x-1] === 1) {         // check left
                    neighbours++
                }
                if (x+1 >= 0 && x+1 < grid[0].length && grid[y][x+1] === 1) {         // check right
                    neighbours++
                }
                if (y-1 >= 0 && y-1 < grid.length && grid[y-1][x] === 1) {         // check up
                    neighbours++
                }
                if (y+1 >= 0 && y+1 < grid.length && grid[y+1][x] === 1) {         // check down
                    neighbours++
                }
                // console.log(`X ${x}, Y: ${y} has ${neighbours} neighbours`)
                // console.log('-----------------------')
                result += (4-neighbours)  // e.g. a square with 1 neighbour will have a perimeter of 3
            }
        }
    }
    return result
};


const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
console.log(islandPerimeter(grid)) // 16

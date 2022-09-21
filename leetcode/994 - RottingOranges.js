/**
 * @param {number[][]} grid
 * @return {number}
 */
const displayGrid = (grid, fresh) => {
    for (m of grid) {
        console.log(JSON.stringify(m));
    }
    console.log(`${fresh} fresh oranges remaining`);
}

// BFS approach
// Have a queue containing initial rotten oranges (2s)
// Traverse adjacent cells in each queue. If any are fresh (1s),
// add them to the queue and set them to rotten (2)
// repeat until queue is empty - no more oranges will rot
// if there are any fresh oranges remaining, return -1 because they won't all spoil
// otherwise, return the number of rounds

var orangesRotting = function (grid) {
    let queue = []
    let fresh = 0
    let time = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j])
            }
            if (grid[i][j] == 1) {
                fresh++
            }
        }
    }
    console.log(`rotten oranges found at positions: ${JSON.stringify(queue)}`)
    console.log(`there are ${fresh} fresh oranges`);

    while (queue.length > 0 && fresh > 0) {
        displayGrid(grid, fresh)
        let newqueue = []
        let qlength = queue.length
        for (let i = 0; i < qlength; i++) { // iterate through known 2s in queue
            const [y, x] = queue.shift()
            if (x - 1 >= 0 && grid[y][x - 1] === 1) { // check left
                newqueue.push([y, x - 1])
                grid[y][x - 1] = 2
                fresh--
            }
            if (x + 1 <= grid[0].length - 1 && grid[y][x + 1] === 1) { // check right
                newqueue.push([y, x + 1])
                grid[y][x + 1] = 2
                fresh--
            }
            if (y - 1 >= 0 && grid[y - 1][x] === 1) { // check up
                newqueue.push([y - 1, x])
                grid[y - 1][x] = 2
                fresh--
            }
            if (y + 1 <= grid.length - 1 && grid[y + 1][x] === 1) { // check down
                newqueue.push([y + 1, x])
                grid[y + 1][x] = 2
                fresh--
            }
        }
        queue = newqueue
        time++
        // console.log(`${fresh} fresh remaining`)
    }
    if (fresh > 0) {
        return -1 // not all oranges will rot
    } else {
        return time
    }
};

const ex1 = [[2, 1, 1], [0, 1, 1], [1, 0, 1]] // -1
const ex2 = [[2, 1, 1], [1, 1, 0], [0, 1, 1]] // 4
const ex3 = [[0, 2]]                          // 0
const ex4 = [[0]]                             // 0
const ex5 = [[2, 1, 1], [1, 1, 1], [0, 1, 2]] // 2
const ex6 = [[2, 1, 0, 2]]                    // 1

console.log(orangesRotting(ex6))

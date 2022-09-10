/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 * 
 * An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
Return the modified image after performing the flood fill.
 */

var floodFill = function (image, sr, sc, newcolor) {
    let originalcolor = image[sr][sc]
    image[sr][sc] = newcolor
    dfs(image, sr, sc, originalcolor, newcolor)
    // return image
    console.log(JSON.stringify(image));
};

// recursive depth-first solution
const dfs = (image, sr, sc, originalcolor, newcolor) => {
    if (checkValid(image, sr - 1, sc, originalcolor, newcolor)) { // look left
        image[sr - 1][sc] = newcolor
        dfs(image, sr - 1, sc, originalcolor, newcolor)
    }
    if (checkValid(image, sr + 1, sc, originalcolor, newcolor)) { // look right
        image[sr + 1][sc] = newcolor
        dfs(image, sr + 1, sc, originalcolor, newcolor)
    }
    if (checkValid(image, sr, sc - 1, originalcolor, newcolor)) { // look up
        image[sr][sc - 1] = newcolor
        dfs(image, sr, sc - 1, originalcolor, newcolor)
    }
    if (checkValid(image, sr, sc + 1, originalcolor, newcolor)) { // look down
        image[sr][sc + 1] = newcolor
        dfs(image, sr, sc + 1, originalcolor, newcolor)
    }
}

const checkValid = (image, x, y, originalcolor, newcolor) => {
    // check that new location is in bounds and color is the one we're trying to match
    if (x >= 0 && x < image.length && y >= 0 && y < image[0].length && image[x][y] === originalcolor && image[x][y] !== newcolor) { 
        return true
    }
    return false
}

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
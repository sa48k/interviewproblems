// Naive solution - runs in O(n^2) time
// var maxProfit = function (prices) {
//     var startday, endday, profit = 0

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i+1; j < prices.length ; j++) {
//             // console.log(i, j, prices[j] - prices[i]) // debug
//             if (prices[j] - prices[i] > profit) {
//                 startday = i
//                 endday = prices.length
//                 profit = prices[j] - prices[i]
//             }
//         }
//     }

//     return profit
// };

// actual solution using left (buy) and right (sell) pointers
// runs in O(n) time

var maxProfit = function (prices) {
    let left = 0
    let right = 1
    let maxprofit = 0
    while (right < prices.length) {
        if (prices[left] < prices[right]) {             // if this trade is profitable
            let profit = prices[right] - prices[left]  // find out HOW profitable, 
            maxprofit = Math.max(maxprofit, profit)    // then if it's higher than the current best known profit, update the maxprofit
        } else {
            left = right                               // if it isn't, move the buy pointer to the sell pointer's location
        }
        right++
    }
    return maxprofit
};

const prices = [7, 1, 4, 6, 1, 3]
console.log(maxProfit(prices)) 
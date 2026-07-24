// Problem: Best Time to Buy and Sell Stock

// Given:

// prices = [7,1,5,3,6,4]

// You can:

// Buy once
// Sell once
// Buy before selling

// Return the maximum profit.

// Example:

// Buy at 1
// Sell at 6

// Profit = 5

const prices = [7,1,5,3,6,4];

function firstApproach(arr){
 let minPrice = arr[0];
 let maxProfit = 0;

 for(let i=0;i < arr.length; i++){
    minPrice = Math.min(minPrice, arr[i]);
    let profit = arr[i]-minPrice
    maxProfit = Math.max(profit, maxProfit);
 }
     return maxProfit;
}

console.log(firstApproach(prices))
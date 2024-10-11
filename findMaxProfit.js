//lead code -121: Best time to buy and sell stock


function maxProfit(prices) {
    let minPrice = Infinity;  
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
       
        let potentialProfit = prices[i] - minPrice;
        
        if (potentialProfit > profit) {
            profit = potentialProfit;
        }
    }

    return profit;
}

console.log(maxProfit([7,1,5,3,6,4]))  //5
console.log(maxProfit([7,5,3,1]))    // because, No profit
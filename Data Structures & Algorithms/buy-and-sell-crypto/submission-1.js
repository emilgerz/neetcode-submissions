class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0

        for (let left = 0, right = 0; right < prices.length; right++) {
            if (prices[right] > prices[left]) {
                maxProfit = Math.max(maxProfit, prices[right] - prices[left])
            } else {
                left = right
            }
        }

        return maxProfit
    }
}

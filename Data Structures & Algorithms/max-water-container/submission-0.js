class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1

        let maxCapacity = 0

        while (left < right) {
            const waterLine = Math.min(heights[left], heights[right])

            const waterCapacity = (right - left) * waterLine

            maxCapacity = Math.max(maxCapacity, waterCapacity)

            if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }
        
        return maxCapacity
    }
}

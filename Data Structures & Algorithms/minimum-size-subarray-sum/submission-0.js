class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let sum = 0
        let minLength = Infinity

        for (let left = 0, right = 0; right < nums.length; right++) {
            sum += nums[right]

            while (sum >= target) {
                minLength = Math.min(minLength, right - left + 1)
                sum -= nums[left]
                left++
            }
        }

        return minLength === Infinity ? 0 : minLength
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diff2idx = {}

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]

            const matchPreviousIdx = diff2idx[diff]

            if (matchPreviousIdx !== undefined) {
                return [matchPreviousIdx, i]
            }

            diff2idx[nums[i]] = i
        }
    }
}

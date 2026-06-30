class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const set = new Set()

        for (let i = 0; i < k; i++) {
            if (set.has(nums[i])) {
                return true
            }

            set.add(nums[i])
        }

        for (let i = k; i <= nums.length; i++) {
            if (set.has(nums[i])) {
                return true
            }

            set.add(nums[i])
            set.delete(nums[i - k])
        }

        return false
    }
}

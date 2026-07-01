class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const allNums = new Set(nums.values())
        const peaks = new Set(nums.values());

        for (const num of nums) {
            if (peaks.has(num - 1)) {
                peaks.delete(num)
            }
        }

        let maxSequence = 0
        
        peaks.forEach(peak => {
            let counter = 0

            let currentPeak = peak

            while (allNums.has(currentPeak)) {
                currentPeak++
                counter++
            }

            maxSequence = Math.max(counter, maxSequence)
        })

        return maxSequence
    }
}

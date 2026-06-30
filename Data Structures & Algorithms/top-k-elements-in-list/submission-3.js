class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counters = {};

        for (const num of nums) {
            counters[num] ??= 0;
            counters[num]++;
        }

        const res = []


        while (res.length !== k) {
            const entries = Object.entries(counters)

            let maxNum = null
            let maxCounter = 0

            for (const [numStr, count] of entries) {
                if (count > maxCounter) {
                    maxCounter = count
                    maxNum = Number(numStr)
                }
            }

            res.push(maxNum)

            delete counters[maxNum]

            maxNum = null
            maxCounter = 0
        }

        return res;
    }
}

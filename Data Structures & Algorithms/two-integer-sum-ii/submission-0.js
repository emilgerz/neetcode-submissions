class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const diff_to_idx = new Map()

        for (let i = 0; i < numbers.length; i++) {
            const wanted = target - numbers[i]
            
            if (diff_to_idx.has(numbers[i])) {
                return [diff_to_idx.get(numbers[i]) + 1, i + 1]
            }

            diff_to_idx.set(wanted, i)
        }

        return -1
    }
}

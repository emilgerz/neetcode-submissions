class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []

        const vocabulary = {}

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[stack.at(-1)] < temperatures[i]) {
                const prevSmallerTempIdx = stack.pop()

                vocabulary[prevSmallerTempIdx] = i - prevSmallerTempIdx
            }

            stack.push(i)
        }

        return temperatures.map((_, idx) => vocabulary[idx] ?? 0)
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let letters = {}

        let maxLength = 0

        for (let left = 0, right = 0; right < s.length; right++) {
            letters[s[right]] ??= 0
            letters[s[right]]++

            const mostFreq = Math.max(...Object.values(letters))

            const windowSize = right - left + 1

            if (windowSize - mostFreq <= k) {
                maxLength = Math.max(maxLength, windowSize)
            } else {
                letters[s[left]]--
                left++
            }
        }

        return maxLength
    }
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false
        }

        const letters = {}

        for (let i = 0; i < s1.length; i++) {
            letters[s1[i]] ??= 0
            letters[s1[i]]++

            letters[s2[i]] ??= 0
            letters[s2[i]]--
        }

        for (let i = s1.length; i <= s2.length; i++) {
            const lettersCount = Object.values(letters)

            if (lettersCount.every(diff => diff === 0)) {
                return true
            }

            if (i !== s2.length) {
                letters[s2[i]] ??= 0
                letters[s2[i]]--

                letters[s2[i - s1.length]] ??= 0
                letters[s2[i - s1.length]]++
            }
        }

        return false
    }
}

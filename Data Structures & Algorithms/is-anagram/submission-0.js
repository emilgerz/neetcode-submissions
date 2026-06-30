class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        
        const vocabulary = {}

        for (let i = 0; i < s.length; i++) {
            vocabulary[s[i]] ??= 0
            vocabulary[s[i]]++

            vocabulary[t[i]] ??= 0
            vocabulary[t[i]]--
        }

        return Object.values(vocabulary).every(count => count === 0)
    }
}

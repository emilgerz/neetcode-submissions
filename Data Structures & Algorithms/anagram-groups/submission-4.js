class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {}

        const FIRST_LETTER_CODE = 'a'.codePointAt()
        const ANAGRAM_LENGTH = 'z'.codePointAt() - 'a'.codePointAt()
        let currentAnagram = Array(ANAGRAM_LENGTH).fill(0)

        for (const word of strs) {
            for (let i = 0; i < word.length; i++) {
                currentAnagram[word[i].codePointAt() - FIRST_LETTER_CODE]++
            }

            const anagramKey = currentAnagram.join(',')

            anagrams[anagramKey] ??= []
            anagrams[anagramKey].push(word)

            currentAnagram = Array(ANAGRAM_LENGTH).fill(0)
        }

        return Object.values(anagrams)
    }
}

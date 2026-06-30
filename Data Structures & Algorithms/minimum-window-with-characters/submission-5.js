class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return ''
        }

        const letters = {}

        for (let i = 0; i < t.length; i++) {
            letters[t[i]] ??= 0
            letters[t[i]]++
        }

        const window = {}

        let match = 0
        const needed = Object.keys(letters).length
        let res = null

        for (let left = 0, right = 0; right < s.length; right++) {
            window[s[right]] ??= 0
            window[s[right]]++

            if (window[s[right]] === letters[s[right]]) {
                match++
            }

            while (match === needed) {
                const candidate = s.slice(left, right + 1)

                if (res === null || candidate.length < res.length) {
                    res = candidate
                }

                window[s[left]]--
                
                if (window[s[left]] < letters[s[left]]) {
                    match--
                }

                left++
            }
        }

        return res === null ? '' : res
    }
}

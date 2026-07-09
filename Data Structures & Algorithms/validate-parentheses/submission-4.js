class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {

    const START_PARETHESES = {
      "(": ")",
      "[": "]",
      "{": "}",
    };

    const END_PARETHESES = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    const stack = [];

    for (const symb of s) {
        if (START_PARETHESES[symb]) {
            stack.push(symb)
        }

        if (END_PARETHESES[symb]) {
            if (stack.length === 0) {
                return false
            }

            const lastUsedStart = stack.pop()

            if (lastUsedStart !== END_PARETHESES[symb]) {
                return false
            }
        }
    }

    return stack.length === 0
  }
}

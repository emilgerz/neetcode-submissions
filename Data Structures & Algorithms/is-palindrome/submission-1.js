class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const sanitizedS = s.replaceAll(/\W/g, "").toLowerCase();

    let left = 0;
    let right = sanitizedS.length - 1;

    while (left < right) {
      if (sanitizedS[left].toLowerCase() !== sanitizedS[right].toLowerCase()) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  }
}

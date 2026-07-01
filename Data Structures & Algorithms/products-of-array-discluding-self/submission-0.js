class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;

        const prefixArr = nums.slice();

        for (let i = 0; i < prefixArr.length; i++) {
            product *= prefixArr[i];
            prefixArr[i] = product;
        }

        product = 1;

        const postfixArr = nums.slice();

        for (let i = postfixArr.length - 1; i >= 0; i--) {
            product *= postfixArr[i];
            postfixArr[i] = product;
        }

        return nums.map((num, i) => (prefixArr[i - 1] ?? 1) * (postfixArr[i + 1] ?? 1))
    }
}

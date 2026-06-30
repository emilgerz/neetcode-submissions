class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        const res = []

        for (let i = 0; i < k; i++) {
            res.push(arr[i])
        }

        for (let i = k; i < arr.length; i++) {
            if (Math.abs(arr[i] - x) < Math.abs(res[0] - x)) {
                res.shift()
                res.push(arr[i])
            }
        }

        return res
    }
}

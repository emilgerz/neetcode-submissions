/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  isSameTree(p, q) {
    const isEqual = (node1, node2) => {
      if (node1 && node2 && node1.val === node2.val) {
        return (
          isEqual(node1.left, node2.left) && isEqual(node1.right, node2.right)
        )
      }

      if (node1 === null && node2 === null) {
        return true
      }

      return false
    }

    return isEqual(p, q)
  }
}

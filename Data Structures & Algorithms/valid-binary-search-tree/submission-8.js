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
   * @param {TreeNode} root
   * @return {boolean}
   */
  isValidBST(root, min = -Infinity, max = +Infinity) {
    if (root === null) {
      return true;
    }

    if (root.val < min || root.val > max) {
      return false;
    }

    if (root.left && root.left.val > max) {
      return false;
    }

    if (root.right && root.right.val < min) {
      return false;
    }

    return this.isValidBST(root.left, min, root.val - 1) && this.isValidBST(root.right, root.val + 1, max);
  }
}

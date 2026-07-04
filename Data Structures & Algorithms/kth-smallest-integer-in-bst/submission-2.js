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
   * @param {number} k
   * @return {number}
   */
  kthSmallest(root, k) {
    let leafCount = 0;

    const findLeafVal = (node) => {
      if (node === null) {
        return null;
      }

      if (leafCount === k) {
        return node.val;
      }

      const left = findLeafVal(node.left, k);

      leafCount++;

      if (leafCount === k) {
        return node.val;
      }

      const right = findLeafVal(node.right, k);


      return left ?? right;
    };

    return findLeafVal(root, k);
  }
}

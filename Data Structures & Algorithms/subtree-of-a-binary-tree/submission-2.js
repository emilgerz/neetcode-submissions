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
   * @param {TreeNode} subRoot
   * @return {boolean}
   */
  isSubtree(root, subRoot) {
    const potentials = []
    
    const findPotentials = (node) => {
      if (node === null) {
        return null;
      }

      if (node.val === subRoot.val) {
        potentials.push(node);
      }

      return findPotentials(node.left, subRoot) || findPotentials(node.right, subRoot);
    };

    findPotentials(root)

    const isEqual = (node1, node2) => {
      if (node1 && node2 && node1.val === node2.val) {
        return isEqual(node1.left, node2.left) && isEqual(node1.right, node2.right);
      }

      if (node1 === null && node2 === null) {
        return true;
      }

      return false;
    };

    for (const potential of potentials) {
      const equal = isEqual(potential, subRoot)

      if (equal) {
        return true
      }
    }

    return false
  }
}

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
     * @return {TreeNode}
     */
    invertTree(root) {
       const stack = [root]

       while (stack.length !== 0) {
        const node = stack.pop()

        if (node === null) {
            continue
        }

        ;[node.left, node.right] = [node.right, node.left]

        stack.push(node.left, node.right)
       }

       return root
    }
}

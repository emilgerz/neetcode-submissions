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
     * @return {number[][]}
     */
    levelOrder(root) {
        const depth2tree = new Map()

        const registerNodeDepth = (node, depth = 0) => {
            if (node === null) {
                return null
            }

            const currentDepthNodes = depth2tree.get(depth) ?? []
            depth2tree.set(depth, currentDepthNodes.concat(node.val))

            return registerNodeDepth(node.left, depth + 1) ?? registerNodeDepth(node.right, depth + 1)
        }

        registerNodeDepth(root, 0)

        const result = Array.from({length: depth2tree.size}, (_, idx) => depth2tree.get(idx))

        return result
    }
}

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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const findPath = (node, requested, path = []) => {
            if (node === null) {
                return null
            }

            const newPath = path.concat(node)

            if (node.val === requested.val) {
                return newPath
            }

            return findPath(node.left, requested, newPath) ?? findPath(node.right, requested, newPath) 
        }

        const pPath = findPath(root, p)
        const qPath = findPath(root, q)

        const minLength = Math.min(pPath.length, qPath.length)

        for (let i = 0; i < minLength; i++) {
            const nextP = pPath[i + 1]
            const nextQ = qPath[i + 1]

            if (nextP?.val !== nextQ?.val) {
                return pPath[i]
            }
        }

        return null
    }
}

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

class Codec {
  /**
   * Encodes a tree to a single string.
   *
   * @param {TreeNode} root
   * @return {string}
   */
  serialize(root) {
    const arrayedRoot = []

    const stack = [[root, '']];

    while (stack.length !== 0) {
      const [node, path] = stack.shift();

      if (node === null) {
        continue;
      }

      arrayedRoot.push(`${path}_${node.val}`)

      stack.push([node.left, path + "l"]);
      stack.push([node.right, path + "r"]);
    }

    return arrayedRoot.join('#');
  }

  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  deserialize(data) {
    if (data.length === 0) {
      return null;
    }

    const resultRoot = new TreeNode()

    const arrayedRoot = data.split('#')

    for (const node of arrayedRoot) {
      const [path, value] = node.split('_')

      let tempRoot = resultRoot

      const splittedPath = path.split('')
      
      for (const side of splittedPath) {
        if (side === 'l') {
          if (tempRoot.left === null) {
            tempRoot.left = new TreeNode()
          }
          
          tempRoot = tempRoot.left
        } else {
          if (tempRoot.right === null) {
            tempRoot.right = new TreeNode()
          }

          tempRoot = tempRoot.right
        }
      }

      tempRoot.val = Number(value)
    }

    return resultRoot
  }
}

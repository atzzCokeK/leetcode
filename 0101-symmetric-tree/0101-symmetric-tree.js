/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isMirror(root.left, root.right)
};

const isMirror = (lNode, rNode) => {
    if (lNode === null & rNode === null){
        return true
    }
    
    if (lNode === null || rNode === null ){
        return false
    }
    
    return (lNode.val === rNode.val) && isMirror(lNode.left,rNode.right) && isMirror(lNode.right, rNode.left)
}
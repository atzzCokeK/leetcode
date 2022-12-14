/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const parentVal = root.val
    const pVal = p.val
    const qVal = q.val
    
    if (pVal > parentVal && qVal > parentVal){
        return lowestCommonAncestor(root.right,p,q)
    } else if (pVal < parentVal && qVal < parentVal){
        return lowestCommonAncestor(root.left,p,q)
    } else{
        return root
    }
    
};
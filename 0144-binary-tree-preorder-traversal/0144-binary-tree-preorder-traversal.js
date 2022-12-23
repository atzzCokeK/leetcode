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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (root === null){
        return []
    }
    
    const answer = []
    
    const func = (node) =>{
        if (node === null) return
        
        answer.push(node.val);
        func(node.left)
        func(node.right)
    }
    
    func(root)
    
    return answer
};
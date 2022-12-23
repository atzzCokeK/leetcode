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
var postorderTraversal = function(root) {
    const answers = []
    
    const func = (node) => {
        if(!node) {
            return
        }
        
        func(node.left)
        func(node.right)
        answers.push(node.val)
    }
    func(root)
    return answers
    
};
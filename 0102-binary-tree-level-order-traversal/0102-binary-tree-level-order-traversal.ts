/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let queue = [root];
    let result = [];
    while(queue.length > 0){
        let dummy = [];
        let size = queue.length;
        for(let i=0;i<size;i++){
            const pop = queue.shift();
            dummy.push(pop.val);        
            if(pop.left){
                queue.push(pop.left);
            }
            if(pop.right){
                queue.push(pop.right);
            }
        }
        result.push(dummy);
    }
    return result
};
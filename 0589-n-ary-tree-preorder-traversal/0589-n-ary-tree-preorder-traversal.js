/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const stack = []
    const output = []

    if (root === null){
        return output
    }

    stack.push(root)
    while(stack.length !== 0){
        const tmpNode = stack.pop()
        output.push(tmpNode.val)
        tmpNode.children.reverse()
        for (let i = 0; i < tmpNode.children.length; i++){
            stack.push(tmpNode.children[i])
        }
    }

    return output
};